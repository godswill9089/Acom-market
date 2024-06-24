"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Wagmi__WEBPACK_IMPORTED_MODULE_1__]);
_utils_Wagmi__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_Wagmi__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        Component: Component,
        pageProps: pageProps
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7481);
/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__]);
_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";






const { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([
    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.polygonMumbai,
    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.mainnet
], [
    (0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_4__.infuraProvider)({
        apiKey: "INFURA_API",
        priority: 1
    }), 
]);
const { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({
    appName: "Custom Dex",
    chains
});
const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({
    autoConnect: true,
    connectors,
    provider
});
const myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.midnightTheme)(), {
    colors: {
        accentColor: "#18181b",
        accentColorForeground: "#fff"
    }
});
function WagmiWrapper({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {
        client: wagmiClient,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {
            chains: chains,
            theme: myTheme,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WagmiWrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1831:
/***/ ((module) => {

module.exports = require("lodash/merge");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ 7481:
/***/ ((module) => {

module.exports = require("wagmi/providers/infura");

/***/ }),

/***/ 6921:
/***/ ((module) => {

module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8510));
module.exports = __webpack_exports__;

})();