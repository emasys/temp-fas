module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./lib/initialState.ts":
/*!*****************************!*\
  !*** ./lib/initialState.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_reducers_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/reducers/auth */ "./redux/reducers/auth.ts");

const state = {
  auth: _redux_reducers_auth__WEBPACK_IMPORTED_MODULE_0__["initialAuthState"]
};
/* harmony default export */ __webpack_exports__["default"] = (state);

/***/ }),

/***/ "./lib/with-redux-store.js":
/*!*********************************!*\
  !*** ./lib/with-redux-store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialState */ "./lib/initialState.ts");
var _jsxFileName = "/Users/emasys/Desktop/temp-fas/lib/with-redux-store.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (true) {
    return Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (App => {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const store = getOrCreateStore(_initialState__WEBPACK_IMPORTED_MODULE_2__["default"]); // Provide the store to getInitialProps of pages

      appContext.ctx.store = store;
      return _objectSpread(_objectSpread({}, App.getInitialProps ? await App.getInitialProps(appContext) : {}), {}, {
        initialReduxState: store.getState()
      });
    }

    render() {
      const {
        initialReduxState
      } = this.props;
      return __jsx(App, _extends({}, this.props, {
        store: getOrCreateStore(initialReduxState),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 14
        }
      }));
    }

  };
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_with_redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/with-redux-store */ "./lib/with-redux-store.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_primary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/primary */ "./styles/primary.ts");
var _jsxFileName = "/Users/emasys/Desktop/temp-fas/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__["PersistGate"], {
      loading: null,
      persistor: store.persistor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
      theme: _styles_primary__WEBPACK_IMPORTED_MODULE_8__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }), __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp));

/***/ }),

/***/ "./redux/actions/types.ts":
/*!********************************!*\
  !*** ./redux/actions/types.ts ***!
  \********************************/
/*! exports provided: EActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EActionTypes", function() { return EActionTypes; });
let EActionTypes;

(function (EActionTypes) {
  EActionTypes["LOGIN"] = "LOGIN";
  EActionTypes["RESET_STORE"] = "RESET_STORE";
})(EActionTypes || (EActionTypes = {}));

/***/ }),

/***/ "./redux/reducers/auth.ts":
/*!********************************!*\
  !*** ./redux/reducers/auth.ts ***!
  \********************************/
/*! exports provided: initialAuthState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialAuthState", function() { return initialAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return auth; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./redux/actions/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialAuthState = {
  loggedIn: {
    email: '',
    password: ''
  }
};
function auth(state = initialAuthState, action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["EActionTypes"].LOGIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        loggedIn: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["EActionTypes"].RESET_STORE:
      return initialAuthState;

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/reducers/index.ts":
/*!*********************************!*\
  !*** ./redux/reducers/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./redux/reducers/auth.ts");


const reducers = {
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers));

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.ts");






const persistConfig = {
  key: 'fas',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default())
};
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__["persistReducer"])(persistConfig, _reducers__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (initialState => {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));

  if (false) {}

  store.persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__["persistStore"])(store);
  return store;
});

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/primary.ts":
/*!***************************!*\
  !*** ./styles/primary.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#181818'
    },
    secondary: {
      main: '#636363'
    }
  }
});
theme.overrides = {
  MuiTypography: {
    h1: {
      color: '#181818',
      fontSize: '5.5rem',
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        fontSize: '3rem'
      }
    },
    h2: {
      color: '#181818',
      fontSize: '5rem',
      fontWeight: 'bold',
      [theme.breakpoints.down('xs')]: {
        fontSize: '2rem'
      }
    },
    h3: {
      color: '#181818',
      fontSize: '4rem',
      fontWeight: 'normal',
      lineHeight: 1.5,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem'
      }
    },
    h4: {
      color: '#181818',
      fontSize: '3rem',
      fontWeight: 'normal',
      lineHeight: 1.5,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem'
      }
    },
    h5: {
      color: '#181818',
      fontSize: '2rem',
      fontWeight: 'normal',
      lineHeight: 1.5,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem'
      }
    },
    h6: {
      color: '#181818',
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: 1.5,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem'
      }
    },
    body1: {
      fontSize: '.8rem',
      color: '#fff',
      fontWeight: 300
    },
    body2: {
      fontSize: '.7rem',
      fontWeight: 'bold',
      color: '#636363'
    },
    button: {
      color: '#008982',
      fontSize: '1rem',
      fontWeight: 'bold',
      lineHeight: '45 px'
    },
    caption: {
      color: '#b4c0c1',
      fontSize: '.5rem',
      fontWeight: 'normal',
      lineHeight: 1.5
    }
  },
  MuiInputBase: {
    root: {
      fontFamily: 'Lato',
      color: '#5C5C5C !important',
      fontSize: '0.92rem',
      fontWeight: 500,
      backgroundColor: 'rgba(186,215,214,0.12) !important',
      height: '3.33rem'
    },
    input: {
      '&::placeholder': {
        color: '#5C5C5C !important',
        fontSize: '0.92rem'
      }
    }
  },
  MuiFilledInput: {
    root: {
      background: '#F6F6F6 !important',
      borderRadius: '0.375rem',
      padding: 0,
      '&:before': {
        border: 'none !important'
      },
      '&:after': {
        border: 'none !important'
      }
    },
    input: {
      padding: '1rem'
    },
    error: {
      background: 'rgba(251,234,232,0.32) !important'
    },
    disabled: {
      '&:before': {
        borderBottomStyle: 'solid !important'
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2xpYi9pbml0aWFsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3dpdGgtcmVkdXgtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2F1dGgudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3ByaW1hcnkudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsic3RhdGUiLCJhdXRoIiwiaW5pdGlhbEF1dGhTdGF0ZSIsIl9fTkVYVF9SRURVWF9TVE9SRV9fIiwiZ2V0T3JDcmVhdGVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImluaXRpYWxpemVTdG9yZSIsIndpbmRvdyIsIkFwcCIsIkFwcFdpdGhSZWR1eCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsInN0b3JlIiwiY3R4IiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSIsInJlbmRlciIsInByb3BzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIkNvbnRhaW5lciIsImNyZWF0ZVVybCIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJfZXJyb3JJbmZvIiwicm91dGVyIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidXJsIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwiZXhlY09uY2UiLCJjb25zb2xlIiwid2FybiIsInAiLCJjaGlsZHJlbiIsInBhdGhuYW1lIiwiYXNQYXRoIiwicXVlcnkiLCJiYWNrIiwicHVzaCIsImFzIiwicHVzaFRvIiwiaHJlZiIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwicGVyc2lzdG9yIiwidGhlbWUiLCJ3aXRoUmVkdXhTdG9yZSIsIkVBY3Rpb25UeXBlcyIsImxvZ2dlZEluIiwiZW1haWwiLCJwYXNzd29yZCIsImFjdGlvbiIsInR5cGUiLCJMT0dJTiIsInBheWxvYWQiLCJSRVNFVF9TVE9SRSIsInJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJtb2R1bGUiLCJwZXJzaXN0U3RvcmUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsIm92ZXJyaWRlcyIsIk11aVR5cG9ncmFwaHkiLCJoMSIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiaDIiLCJoMyIsImxpbmVIZWlnaHQiLCJoNCIsImg1IiwiaDYiLCJib2R5MSIsImJvZHkyIiwiYnV0dG9uIiwiY2FwdGlvbiIsIk11aUlucHV0QmFzZSIsInJvb3QiLCJmb250RmFtaWx5IiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwiaW5wdXQiLCJNdWlGaWxsZWRJbnB1dCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiYm9yZGVyIiwiZGlzYWJsZWQiLCJib3JkZXJCb3R0b21TdHlsZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7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QVlkTCxTQUFLLEVBQUU7QUFDTEksYUFBTyxFQUFFO0FBREosS0FaTztBQWVkekYsU0FBSyxFQUFFO0FBQ0x1RixnQkFBVSxFQUFFO0FBRFAsS0FmTztBQWtCZEksWUFBUSxFQUFFO0FBQ1Isa0JBQVk7QUFDVkMseUJBQWlCLEVBQUU7QUFEVDtBQURKO0FBbEJJO0FBN0ZBLENBQWxCO0FBdUhlM0Qsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCB7IElBdXRoLCBpbml0aWFsQXV0aFN0YXRlIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYXV0aCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xuICBhdXRoOiBJQXV0aDtcbn1cblxuY29uc3Qgc3RhdGU6IEFwcFN0YXRlID0ge1xuICBhdXRoOiBpbml0aWFsQXV0aFN0YXRlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgaW5pdGlhbGl6ZVN0b3JlIGZyb20gJy4uL3JlZHV4L3N0b3JlJ1xuaW1wb3J0IHN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJztcblxuY29uc3QgX19ORVhUX1JFRFVYX1NUT1JFX18gPSAnX19ORVhUX1JFRFVYX1NUT1JFX18nXG5cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIC8vIEFsd2F5cyBtYWtlIGEgbmV3IHN0b3JlIGlmIHNlcnZlciwgb3RoZXJ3aXNlIHN0YXRlIGlzIHNoYXJlZCBiZXR3ZWVuIHJlcXVlc3RzXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKVxuICB9XG5cbiAgLy8gQ3JlYXRlIHN0b3JlIGlmIHVuYXZhaWxhYmxlIG9uIHRoZSBjbGllbnQgYW5kIHNldCBpdCBvbiB0aGUgd2luZG93IG9iamVjdFxuICBpZiAoIXdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10pIHtcbiAgICB3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dID0gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSlcbiAgfVxuICByZXR1cm4gd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHAgPT4ge1xuICByZXR1cm4gY2xhc3MgQXBwV2l0aFJlZHV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpIHtcbiAgICAgIC8vIEdldCBvciBDcmVhdGUgdGhlIHN0b3JlIHdpdGggYHVuZGVmaW5lZGAgYXMgaW5pdGlhbFN0YXRlXG4gICAgICAvLyBUaGlzIGFsbG93cyB5b3UgdG8gc2V0IGEgY3VzdG9tIGRlZmF1bHQgaW5pdGlhbFN0YXRlXG4gICAgICBjb25zdCBzdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUoc3RhdGUpXG5cbiAgICAgIC8vIFByb3ZpZGUgdGhlIHN0b3JlIHRvIGdldEluaXRpYWxQcm9wcyBvZiBwYWdlc1xuICAgICAgYXBwQ29udGV4dC5jdHguc3RvcmUgPSBzdG9yZVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi4oQXBwLmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCkgOiB7fSksXG4gICAgICAgIGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgaW5pdGlhbFJlZHV4U3RhdGUgfSA9IHRoaXMucHJvcHNcbiAgICAgIHJldHVybiA8QXBwIHsuLi50aGlzLnByb3BzfSBzdG9yZT17Z2V0T3JDcmVhdGVTdG9yZShpbml0aWFsUmVkdXhTdGF0ZSl9IC8+XG4gICAgfVxuICB9XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuQ29udGFpbmVyPUNvbnRhaW5lcjtleHBvcnRzLmNyZWF0ZVVybD1jcmVhdGVVcmw7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wczsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF9yZWYpe3ZhcntDb21wb25lbnQsY3R4fT1fcmVmO3ZhciBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHsvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbi8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbmNvbXBvbmVudERpZENhdGNoKGVycm9yLF9lcnJvckluZm8pe3Rocm93IGVycm9yO31yZW5kZXIoKXt2YXJ7cm91dGVyLENvbXBvbmVudCxwYWdlUHJvcHMsX19OX1NTRyxfX05fU1NQfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxPYmplY3QuYXNzaWduKHt9LHBhZ2VQcm9wcywvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbi8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4hKF9fTl9TU0d8fF9fTl9TU1ApP3t1cmw6Y3JlYXRlVXJsKHJvdXRlcil9Ont9KSk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wczt2YXIgd2FybkNvbnRhaW5lcjt2YXIgd2FyblVybDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7d2FybkNvbnRhaW5lcj0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS53YXJuKFwiV2FybmluZzogdGhlIGBDb250YWluZXJgIGluIGBfYXBwYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZFwiKTt9KTt3YXJuVXJsPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLmVycm9yKFwiV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy91cmwtZGVwcmVjYXRlZFwiKTt9KTt9Ly8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmZ1bmN0aW9uIENvbnRhaW5lcihwKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuQ29udGFpbmVyKCk7cmV0dXJuIHAuY2hpbGRyZW47fWZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXIpey8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG52YXJ7cGF0aG5hbWUsYXNQYXRoLHF1ZXJ5fT1yb3V0ZXI7cmV0dXJue2dldCBxdWVyeSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcXVlcnk7fSxnZXQgcGF0aG5hbWUoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHBhdGhuYW1lO30sZ2V0IGFzUGF0aCgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gYXNQYXRoO30sYmFjazooKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyb3V0ZXIuYmFjaygpO30scHVzaDoodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnB1c2godXJsLGFzKTt9LHB1c2hUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHB1c2hSb3V0ZT1hcz9ocmVmOicnO3ZhciBwdXNoVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUscHVzaFVybCk7fSxyZXBsYWNlOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsYXMpO30scmVwbGFjZVRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcmVwbGFjZVJvdXRlPWFzP2hyZWY6Jyc7dmFyIHJlcGxhY2VVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSxyZXBsYWNlVXJsKTt9fTt9IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHdpdGhSZWR1eFN0b3JlIGZyb20gJy4uL2xpYi93aXRoLXJlZHV4LXN0b3JlJztcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3ByaW1hcnknO1xuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxQZXJzaXN0R2F0ZSBsb2FkaW5nPXtudWxsfSBwZXJzaXN0b3I9e3N0b3JlLnBlcnNpc3Rvcn0+XG4gICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgPC9QZXJzaXN0R2F0ZT5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXhTdG9yZShNeUFwcCk7XG4iLCJleHBvcnQgZW51bSBFQWN0aW9uVHlwZXMge1xuICBMT0dJTiA9ICdMT0dJTicsXG4gIFJFU0VUX1NUT1JFID0gJ1JFU0VUX1NUT1JFJ1xufVxuIiwiaW1wb3J0IHsgRUFjdGlvblR5cGVzIH0gZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5pbXBvcnQgeyBJTG9naW4gfSBmcm9tICcuLi9hY3Rpb25zL2F1dGgnO1xuXG5pbnRlcmZhY2UgSUxvZ2luQWN0aW9uIHtcbiAgdHlwZTogRUFjdGlvblR5cGVzLkxPR0lOO1xuICBwYXlsb2FkOiBJTG9naW47XG59XG5cbmludGVyZmFjZSBJUmVzZXRBY3Rpb24ge1xuICB0eXBlOiBFQWN0aW9uVHlwZXMuUkVTRVRfU1RPUkU7XG4gIHBheWxvYWQ6IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUF1dGgge1xuICBsb2dnZWRJbjogSUxvZ2luO1xufVxuXG5leHBvcnQgdHlwZSBUQXV0aEFjdGlvbnMgPSBJTG9naW5BY3Rpb24gfCBJUmVzZXRBY3Rpb247XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsQXV0aFN0YXRlID0ge1xuICBsb2dnZWRJbjoge1xuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRoKFxuICBzdGF0ZTogSUF1dGggPSBpbml0aWFsQXV0aFN0YXRlLFxuICBhY3Rpb246IFRBdXRoQWN0aW9uc1xuKTogSUF1dGgge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBFQWN0aW9uVHlwZXMuTE9HSU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9nZ2VkSW46IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBjYXNlIEVBY3Rpb25UeXBlcy5SRVNFVF9TVE9SRTpcbiAgICAgIHJldHVybiBpbml0aWFsQXV0aFN0YXRlO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGgnO1xuXG5jb25zdCByZWR1Y2VycyA9IHtcbiAgYXV0aFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyLCBwZXJzaXN0U3RvcmUgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VycydcblxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcbiAga2V5OiAnZmFzJyxcbiAgc3RvcmFnZSxcbn1cblxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXJzKVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RhdGUgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHBlcnNpc3RlZFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG4gIClcblxuXG4gIGlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vcmVkdWNlcnMnLCAoKSA9PiB7XG4gICAgICBjb25zdCBjcmVhdGVOZXh0UmVkdWNlciA9IHJlcXVpcmUoJy4vcmVkdWNlcnMnKS5kZWZhdWx0XG5cbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGNyZWF0ZU5leHRSZWR1Y2VyKGluaXRpYWxTdGF0ZSkpXG4gICAgfSlcbiAgfVxuICBzdG9yZS5wZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpXG5cbiAgcmV0dXJuIHN0b3JlXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnIzE4MTgxOCcsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjNjM2MzYzJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbnRoZW1lLm92ZXJyaWRlcyA9IHtcbiAgTXVpVHlwb2dyYXBoeToge1xuICAgIGgxOiB7XG4gICAgICBjb2xvcjogJyMxODE4MTgnLFxuICAgICAgZm9udFNpemU6ICc1LjVyZW0nLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAnM3JlbScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIGNvbG9yOiAnIzE4MTgxOCcsXG4gICAgICBmb250U2l6ZTogJzVyZW0nLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMnJlbScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIGNvbG9yOiAnIzE4MTgxOCcsXG4gICAgICBmb250U2l6ZTogJzRyZW0nLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBoNDoge1xuICAgICAgY29sb3I6ICcjMTgxODE4JyxcbiAgICAgIGZvbnRTaXplOiAnM3JlbScsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGg1OiB7XG4gICAgICBjb2xvcjogJyMxODE4MTgnLFxuICAgICAgZm9udFNpemU6ICcycmVtJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaDY6IHtcbiAgICAgIGNvbG9yOiAnIzE4MTgxOCcsXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBib2R5MToge1xuICAgICAgZm9udFNpemU6ICcuOHJlbScsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgZm9udFdlaWdodDogMzAwLFxuICAgIH0sXG4gICAgYm9keTI6IHtcbiAgICAgIGZvbnRTaXplOiAnLjdyZW0nLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgY29sb3I6ICcjNjM2MzYzJyxcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgY29sb3I6ICcjMDA4OTgyJyxcbiAgICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDUgcHgnLFxuICAgIH0sXG4gICAgY2FwdGlvbjoge1xuICAgICAgY29sb3I6ICcjYjRjMGMxJyxcbiAgICAgIGZvbnRTaXplOiAnLjVyZW0nLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgfSxcbiAgfSxcbiAgTXVpSW5wdXRCYXNlOiB7XG4gICAgcm9vdDoge1xuICAgICAgZm9udEZhbWlseTogJ0xhdG8nLFxuICAgICAgY29sb3I6ICcjNUM1QzVDICFpbXBvcnRhbnQnLFxuICAgICAgZm9udFNpemU6ICcwLjkycmVtJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTg2LDIxNSwyMTQsMC4xMikgIWltcG9ydGFudCcsXG4gICAgICBoZWlnaHQ6ICczLjMzcmVtJyxcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICAnJjo6cGxhY2Vob2xkZXInOiB7XG4gICAgICAgIGNvbG9yOiAnIzVDNUM1QyAhaW1wb3J0YW50JyxcbiAgICAgICAgZm9udFNpemU6ICcwLjkycmVtJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgTXVpRmlsbGVkSW5wdXQ6IHtcbiAgICByb290OiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnI0Y2RjZGNiAhaW1wb3J0YW50JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzAuMzc1cmVtJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlcjogJ25vbmUgIWltcG9ydGFudCcsXG4gICAgICB9LFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlcjogJ25vbmUgIWltcG9ydGFudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIHBhZGRpbmc6ICcxcmVtJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTEsMjM0LDIzMiwwLjMyKSAhaW1wb3J0YW50JyxcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQgIWltcG9ydGFudCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==