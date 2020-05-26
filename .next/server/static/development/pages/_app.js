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
  },
  MuiButton: {
    root: {
      minWidth: 180,
      minHeight: '3.33rem',
      outline: '0 !important',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      color: '#fff',
      textTransform: 'inherit',
      fontWeight: 'normal',
      fontFamily: 'Lato'
    },
    contained: {
      backgroundColor: '#43CEA2',
      color: '#fff',
      boxShadow: 'none',
      paddingRight: 25,
      paddingLeft: 25,
      '&:hover': {
        background: '#43CEA2 !important',
        color: '#fff',
        boxShadow: 'none'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2xpYi9pbml0aWFsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3dpdGgtcmVkdXgtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2F1dGgudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3ByaW1hcnkudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsic3RhdGUiLCJhdXRoIiwiaW5pdGlhbEF1dGhTdGF0ZSIsIl9fTkVYVF9SRURVWF9TVE9SRV9fIiwiZ2V0T3JDcmVhdGVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImluaXRpYWxpemVTdG9yZSIsIndpbmRvdyIsIkFwcCIsIkFwcFdpdGhSZWR1eCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsInN0b3JlIiwiY3R4IiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSIsInJlbmRlciIsInByb3BzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIkNvbnRhaW5lciIsImNyZWF0ZVVybCIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJfZXJyb3JJbmZvIiwicm91dGVyIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidXJsIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwiZXhlY09uY2UiLCJjb25zb2xlIiwid2FybiIsInAiLCJjaGlsZHJlbiIsInBhdGhuYW1lIiwiYXNQYXRoIiwicXVlcnkiLCJiYWNrIiwicHVzaCIsImFzIiwicHVzaFRvIiwiaHJlZiIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwicGVyc2lzdG9yIiwidGhlbWUiLCJ3aXRoUmVkdXhTdG9yZSIsIkVBY3Rpb25UeXBlcyIsImxvZ2dlZEluIiwiZW1haWwiLCJwYXNzd29yZCIsImFjdGlvbiIsInR5cGUiLCJMT0dJTiIsInBheWxvYWQiLCJSRVNFVF9TVE9SRSIsInJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJtb2R1bGUiLCJwZXJzaXN0U3RvcmUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsIm92ZXJyaWRlcyIsIk11aVR5cG9ncmFwaHkiLCJoMSIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiaDIiLCJoMyIsImxpbmVIZWlnaHQiLCJoNCIsImg1IiwiaDYiLCJib2R5MSIsImJvZHkyIiwiYnV0dG9uIiwiY2FwdGlvbiIsIk11aUlucHV0QmFzZSIsInJvb3QiLCJmb250RmFtaWx5IiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwiaW5wdXQiLCJNdWlGaWxsZWRJbnB1dCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiYm9yZGVyIiwiZGlzYWJsZWQiLCJib3JkZXJCb3R0b21TdHlsZSIsIk11aUJ1dHRvbiIsIm1pbldpZHRoIiwibWluSGVpZ2h0Iiwib3V0bGluZSIsInRleHRUcmFuc2Zvcm0iLCJjb250YWluZWQiLCJib3hTaGFkb3ciLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVB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LDBDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgeyBJQXV0aCwgaW5pdGlhbEF1dGhTdGF0ZSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2F1dGgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcbiAgYXV0aDogSUF1dGg7XG59XG5cbmNvbnN0IHN0YXRlOiBBcHBTdGF0ZSA9IHtcbiAgYXV0aDogaW5pdGlhbEF1dGhTdGF0ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGluaXRpYWxpemVTdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcbmltcG9ydCBzdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSc7XG5cbmNvbnN0IF9fTkVYVF9SRURVWF9TVE9SRV9fID0gJ19fTkVYVF9SRURVWF9TVE9SRV9fJ1xuXG5mdW5jdGlvbiBnZXRPckNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICAvLyBBbHdheXMgbWFrZSBhIG5ldyBzdG9yZSBpZiBzZXJ2ZXIsIG90aGVyd2lzZSBzdGF0ZSBpcyBzaGFyZWQgYmV0d2VlbiByZXF1ZXN0c1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIC8vIENyZWF0ZSBzdG9yZSBpZiB1bmF2YWlsYWJsZSBvbiB0aGUgY2xpZW50IGFuZCBzZXQgaXQgb24gdGhlIHdpbmRvdyBvYmplY3RcbiAgaWYgKCF3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dKSB7XG4gICAgd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXSA9IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpXG4gIH1cbiAgcmV0dXJuIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX11cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwID0+IHtcbiAgcmV0dXJuIGNsYXNzIEFwcFdpdGhSZWR1eCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KSB7XG4gICAgICAvLyBHZXQgb3IgQ3JlYXRlIHRoZSBzdG9yZSB3aXRoIGB1bmRlZmluZWRgIGFzIGluaXRpYWxTdGF0ZVxuICAgICAgLy8gVGhpcyBhbGxvd3MgeW91IHRvIHNldCBhIGN1c3RvbSBkZWZhdWx0IGluaXRpYWxTdGF0ZVxuICAgICAgY29uc3Qgc3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKHN0YXRlKVxuXG4gICAgICAvLyBQcm92aWRlIHRoZSBzdG9yZSB0byBnZXRJbml0aWFsUHJvcHMgb2YgcGFnZXNcbiAgICAgIGFwcENvbnRleHQuY3R4LnN0b3JlID0gc3RvcmVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uKEFwcC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpIDoge30pLFxuICAgICAgICBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGluaXRpYWxSZWR1eFN0YXRlIH0gPSB0aGlzLnByb3BzXG4gICAgICByZXR1cm4gPEFwcCB7Li4udGhpcy5wcm9wc30gc3RvcmU9e2dldE9yQ3JlYXRlU3RvcmUoaW5pdGlhbFJlZHV4U3RhdGUpfSAvPlxuICAgIH1cbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkNvbnRhaW5lcj1Db250YWluZXI7ZXhwb3J0cy5jcmVhdGVVcmw9Y3JlYXRlVXJsO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7Q29tcG9uZW50LGN0eH09X3JlZjt2YXIgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7Ly8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbi8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4vLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG5jb21wb25lbnREaWRDYXRjaChlcnJvcixfZXJyb3JJbmZvKXt0aHJvdyBlcnJvcjt9cmVuZGVyKCl7dmFye3JvdXRlcixDb21wb25lbnQscGFnZVByb3BzLF9fTl9TU0csX19OX1NTUH09dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7fSxwYWdlUHJvcHMsLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4vLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuIShfX05fU1NHfHxfX05fU1NQKT97dXJsOmNyZWF0ZVVybChyb3V0ZXIpfTp7fSkpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7dmFyIHdhcm5Db250YWluZXI7dmFyIHdhcm5Vcmw7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3dhcm5Db250YWluZXI9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUud2FybihcIldhcm5pbmc6IHRoZSBgQ29udGFpbmVyYCBpbiBgX2FwcGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRcIik7fSk7d2FyblVybD0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS5lcnJvcihcIldhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRcIik7fSk7fS8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5mdW5jdGlvbiBDb250YWluZXIocCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FybkNvbnRhaW5lcigpO3JldHVybiBwLmNoaWxkcmVuO31mdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyKXsvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxudmFye3BhdGhuYW1lLGFzUGF0aCxxdWVyeX09cm91dGVyO3JldHVybntnZXQgcXVlcnkoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHF1ZXJ5O30sZ2V0IHBhdGhuYW1lKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBwYXRobmFtZTt9LGdldCBhc1BhdGgoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIGFzUGF0aDt9LGJhY2s6KCk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cm91dGVyLmJhY2soKTt9LHB1c2g6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5wdXNoKHVybCxhcyk7fSxwdXNoVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciBwdXNoUm91dGU9YXM/aHJlZjonJzt2YXIgcHVzaFVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLHB1c2hVcmwpO30scmVwbGFjZToodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLGFzKTt9LHJlcGxhY2VUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHJlcGxhY2VSb3V0ZT1hcz9ocmVmOicnO3ZhciByZXBsYWNlVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUscmVwbGFjZVVybCk7fX07fSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tICcuLi9saWIvd2l0aC1yZWR1eC1zdG9yZSc7XG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy9wcmltYXJ5JztcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8UGVyc2lzdEdhdGUgbG9hZGluZz17bnVsbH0gcGVyc2lzdG9yPXtzdG9yZS5wZXJzaXN0b3J9PlxuICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvUGVyc2lzdEdhdGU+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4U3RvcmUoTXlBcHApO1xuIiwiZXhwb3J0IGVudW0gRUFjdGlvblR5cGVzIHtcbiAgTE9HSU4gPSAnTE9HSU4nLFxuICBSRVNFVF9TVE9SRSA9ICdSRVNFVF9TVE9SRSdcbn1cbiIsImltcG9ydCB7IEVBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvdHlwZXMnO1xuaW1wb3J0IHsgSUxvZ2luIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoJztcblxuaW50ZXJmYWNlIElMb2dpbkFjdGlvbiB7XG4gIHR5cGU6IEVBY3Rpb25UeXBlcy5MT0dJTjtcbiAgcGF5bG9hZDogSUxvZ2luO1xufVxuXG5pbnRlcmZhY2UgSVJlc2V0QWN0aW9uIHtcbiAgdHlwZTogRUFjdGlvblR5cGVzLlJFU0VUX1NUT1JFO1xuICBwYXlsb2FkOiBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBdXRoIHtcbiAgbG9nZ2VkSW46IElMb2dpbjtcbn1cblxuZXhwb3J0IHR5cGUgVEF1dGhBY3Rpb25zID0gSUxvZ2luQWN0aW9uIHwgSVJlc2V0QWN0aW9uO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbEF1dGhTdGF0ZSA9IHtcbiAgbG9nZ2VkSW46IHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aChcbiAgc3RhdGU6IElBdXRoID0gaW5pdGlhbEF1dGhTdGF0ZSxcbiAgYWN0aW9uOiBUQXV0aEFjdGlvbnNcbik6IElBdXRoIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRUFjdGlvblR5cGVzLkxPR0lOOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvZ2dlZEluOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBFQWN0aW9uVHlwZXMuUkVTRVRfU1RPUkU6XG4gICAgICByZXR1cm4gaW5pdGlhbEF1dGhTdGF0ZTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoJztcblxuY29uc3QgcmVkdWNlcnMgPSB7XG4gIGF1dGhcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgeyBwZXJzaXN0UmVkdWNlciwgcGVyc2lzdFN0b3JlIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJ1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnXG5cbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XG4gIGtleTogJ2ZhcycsXG4gIHN0b3JhZ2UsXG59XG5cbmNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VycylcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFN0YXRlID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxuICApXG5cblxuICBpZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3JlZHVjZXJzJywgKCkgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlTmV4dFJlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHVjZXJzJykuZGVmYXVsdFxuXG4gICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihjcmVhdGVOZXh0UmVkdWNlcihpbml0aWFsU3RhdGUpKVxuICAgIH0pXG4gIH1cbiAgc3RvcmUucGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKVxuXG4gIHJldHVybiBzdG9yZVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyMxODE4MTgnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzYzNjM2MycsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG50aGVtZS5vdmVycmlkZXMgPSB7XG4gIE11aVR5cG9ncmFwaHk6IHtcbiAgICBoMToge1xuICAgICAgY29sb3I6ICcjMTgxODE4JyxcbiAgICAgIGZvbnRTaXplOiAnNS41cmVtJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgICBmb250U2l6ZTogJzNyZW0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICBjb2xvcjogJyMxODE4MTgnLFxuICAgICAgZm9udFNpemU6ICc1cmVtJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgICBmb250U2l6ZTogJzJyZW0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGgzOiB7XG4gICAgICBjb2xvcjogJyMxODE4MTgnLFxuICAgICAgZm9udFNpemU6ICc0cmVtJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIGNvbG9yOiAnIzE4MTgxOCcsXG4gICAgICBmb250U2l6ZTogJzNyZW0nLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBoNToge1xuICAgICAgY29sb3I6ICcjMTgxODE4JyxcbiAgICAgIGZvbnRTaXplOiAnMnJlbScsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGg2OiB7XG4gICAgICBjb2xvcjogJyMxODE4MTgnLFxuICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYm9keTE6IHtcbiAgICAgIGZvbnRTaXplOiAnLjhyZW0nLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICB9LFxuICAgIGJvZHkyOiB7XG4gICAgICBmb250U2l6ZTogJy43cmVtJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGNvbG9yOiAnIzYzNjM2MycsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGNvbG9yOiAnIzAwODk4MicsXG4gICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgbGluZUhlaWdodDogJzQ1IHB4JyxcbiAgICB9LFxuICAgIGNhcHRpb246IHtcbiAgICAgIGNvbG9yOiAnI2I0YzBjMScsXG4gICAgICBmb250U2l6ZTogJy41cmVtJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgIH0sXG4gIH0sXG4gIE11aUlucHV0QmFzZToge1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdMYXRvJyxcbiAgICAgIGNvbG9yOiAnIzVDNUM1QyAhaW1wb3J0YW50JyxcbiAgICAgIGZvbnRTaXplOiAnMC45MnJlbScsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE4NiwyMTUsMjE0LDAuMTIpICFpbXBvcnRhbnQnLFxuICAgICAgaGVpZ2h0OiAnMy4zM3JlbScsXG4gICAgfSxcbiAgICBpbnB1dDoge1xuICAgICAgJyY6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICBjb2xvcjogJyM1QzVDNUMgIWltcG9ydGFudCcsXG4gICAgICAgIGZvbnRTaXplOiAnMC45MnJlbScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIE11aUZpbGxlZElucHV0OiB7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZDogJyNGNkY2RjYgIWltcG9ydGFudCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICcwLjM3NXJlbScsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXI6ICdub25lICFpbXBvcnRhbnQnLFxuICAgICAgfSxcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICBib3JkZXI6ICdub25lICFpbXBvcnRhbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBwYWRkaW5nOiAnMXJlbScsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjUxLDIzNCwyMzIsMC4zMikgIWltcG9ydGFudCcsXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b21TdHlsZTogJ3NvbGlkICFpbXBvcnRhbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBNdWlCdXR0b246IHtcbiAgICByb290OiB7XG4gICAgICBtaW5XaWR0aDogMTgwLFxuICAgICAgbWluSGVpZ2h0OiAnMy4zM3JlbScsXG4gICAgICBvdXRsaW5lOiAnMCAhaW1wb3J0YW50JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzAuMzc1cmVtJyxcbiAgICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ2luaGVyaXQnLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICBmb250RmFtaWx5OiAnTGF0bycsXG4gICAgfSxcbiAgICBjb250YWluZWQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0M0NFQTInLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgcGFkZGluZ1JpZ2h0OiAyNSxcbiAgICAgIHBhZGRpbmdMZWZ0OiAyNSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnIzQzQ0VBMiAhaW1wb3J0YW50JyxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==