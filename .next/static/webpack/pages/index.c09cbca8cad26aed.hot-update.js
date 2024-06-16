"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./components/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), tokenBalComp = ref[0], setTokenBalComp = ref[1];\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)().address;\n    var notifyConnectWallet = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Connect wallet.\", {\n            duration: 2000\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTokenBalComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                    name: \"USD Coin\",\n                    walletAddress: address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                    name: \"BNB\",\n                    walletAddress: address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                    name: \"SHIBA INU\",\n                    walletAddress: address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true));\n        if (!address) notifyConnectWallet();\n    }, [\n        address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"p-4 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container flex justify-between h-16 mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        rel: \"noopener noreferrer\",\n                        href: \"#\",\n                        \"aria-label\": \"Back to homepage\",\n                        className: \"flex items-center p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.Logo, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"items-stretch hidden space-x-3 lg:flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                rel: \"noopener noreferrer\",\n                                href: \"/\",\n                                className: \"flex items-center px-4 -mb-1 dark:border-transparent text- [#7765F3] border-[#7765F3]\",\n                                children: \"Swap\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"dopXMu++gF5Hh7gBSACLYAlxNm0=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFtRDtBQUNJO0FBQ3BCO0FBQ0M7QUFFZTs7QUFFbkQsSUFBTVMsTUFBTSxHQUFHLFdBQU07O0lBQ25CLElBQXdDUCxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBM0NRLFlBQVksR0FBcUJSLEdBQVUsR0FBL0IsRUFBRVMsZUFBZSxHQUFJVCxHQUFVLEdBQWQ7SUFFcEMsSUFBTSxPQUFTLEdBQUtFLGlEQUFVLEVBQUUsQ0FBeEJRLE9BQU87SUFFZixJQUFNQyxtQkFBbUIsR0FBRztlQUMxQlIsNkRBQVcsQ0FBQyxpQkFBaUIsRUFBRTtZQUFFVSxRQUFRLEVBQUUsSUFBSTtTQUFFLENBQUM7S0FBQTtJQUVwRGQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RVLGVBQWUsZUFDYjs7OEJBQ0UsOERBQUNILGdEQUFZO29CQUFDUSxJQUFJLEVBQUUsVUFBVTtvQkFBRUMsYUFBYSxFQUFFTCxPQUFPOzs7Ozt5QkFBSTs4QkFDMUQsOERBQUNKLGdEQUFZO29CQUFDUSxJQUFJLEVBQUUsS0FBSztvQkFBRUMsYUFBYSxFQUFFTCxPQUFPOzs7Ozt5QkFBSTs4QkFDckQsOERBQUNKLGdEQUFZO29CQUFDUSxJQUFJLEVBQUUsV0FBVztvQkFBRUMsYUFBYSxFQUFFTCxPQUFPOzs7Ozt5QkFBSTs7d0JBQzFELENBQ0osQ0FBQztRQUVGLElBQUksQ0FBQ0EsT0FBTyxFQUFFQyxtQkFBbUIsRUFBRSxDQUFDO0tBQ3JDLEVBQUU7UUFBQ0QsT0FBTztLQUFDLENBQUMsQ0FBQztJQUVkLHFCQUNFLDhEQUFDTSxRQUFNO1FBQUNDLFNBQVMsRUFBQyxNQUFNO2tCQUN0Qiw0RUFBQ0MsS0FBRztZQUFDRCxTQUFTLEVBQUMsNkNBQTZDO3NCQUMxRCw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLE1BQU07O2tDQUNuQiw4REFBQ0UsR0FBQzt3QkFDQUMsR0FBRyxFQUFDLHFCQUFxQjt3QkFDekJDLElBQUksRUFBQyxHQUFHO3dCQUNSQyxZQUFVLEVBQUMsa0JBQWtCO3dCQUM3QkwsU0FBUyxFQUFDLHVCQUF1QjtrQ0FFakMsNEVBQUNaLHdDQUFJOzs7O2lDQUFHOzs7Ozs2QkFDTjtrQ0FDSiw4REFBQ2tCLElBQUU7d0JBQUNOLFNBQVMsRUFBQyx3Q0FBd0M7a0NBQ3BELDRFQUFDTyxJQUFFOzRCQUFDUCxTQUFTLEVBQUMsTUFBTTtzQ0FDbEIsNEVBQUNFLEdBQUM7Z0NBQ0FDLEdBQUcsRUFBQyxxQkFBcUI7Z0NBQ3pCQyxJQUFJLEVBQUMsR0FBRztnQ0FDUkosU0FBUyxFQUFDLHVGQUNpQjswQ0FDNUIsTUFFRDs7Ozs7cUNBQUk7Ozs7O2lDQUNEOzs7Ozs2QkFDRjs7Ozs7O3FCQUNEOzs7OztpQkFDRjs7Ozs7YUFDQyxDQUNUO0NBQ0g7R0FoREtWLE1BQU07O1FBR1VMLDZDQUFVOzs7QUFIMUJLLEtBQUFBLE1BQU07QUFrRFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb25uZWN0QnV0dG9uIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcbmltcG9ydCB7IHVzZUFjY291bnQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbmltcG9ydCB7IE1lbnUsIExvZ28sIFRva2VuQmFsYW5jZSB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW3Rva2VuQmFsQ29tcCwgc2V0VG9rZW5CYWxDb21wXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XG5cbiAgY29uc3Qgbm90aWZ5Q29ubmVjdFdhbGxldCA9ICgpID0+IFxuICAgIHRvYXN0LmVycm9yKFwiQ29ubmVjdCB3YWxsZXQuXCIsIHsgZHVyYXRpb246IDIwMDAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUb2tlbkJhbENvbXAoXG4gICAgICA8PlxuICAgICAgICA8VG9rZW5CYWxhbmNlIG5hbWU9e1wiVVNEIENvaW5cIn0gd2FsbGV0QWRkcmVzcz17YWRkcmVzc30gLz5cbiAgICAgICAgPFRva2VuQmFsYW5jZSBuYW1lPXtcIkJOQlwifSB3YWxsZXRBZGRyZXNzPXthZGRyZXNzfSAvPlxuICAgICAgICA8VG9rZW5CYWxhbmNlIG5hbWU9e1wiU0hJQkEgSU5VXCJ9IHdhbGxldEFkZHJlc3M9e2FkZHJlc3N9IC8+XG4gICAgICA8Lz5cbiAgICApO1xuXG4gICAgaWYgKCFhZGRyZXNzKSBub3RpZnlDb25uZWN0V2FsbGV0KCk7XG4gIH0sIFthZGRyZXNzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInAtNCBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXgganVzdGlmeS1iZXR3ZWVuIGgtMTYgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQmFjayB0byBob21lcGFnZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpdGVtcy1zdHJldGNoIGhpZGRlbiBzcGFjZS14LTMgbGc6ZmxleFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTQgLW1iLTEgZGFyazpib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1cbiAgICAgICAgICAgICAgICBbIzc3NjVGM10gYm9yZGVyLVsjNzc2NUYzXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTd2FwXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29ubmVjdEJ1dHRvbiIsInVzZUFjY291bnQiLCJ0b2FzdCIsIk1lbnUiLCJMb2dvIiwiVG9rZW5CYWxhbmNlIiwiSGVhZGVyIiwidG9rZW5CYWxDb21wIiwic2V0VG9rZW5CYWxDb21wIiwiYWRkcmVzcyIsIm5vdGlmeUNvbm5lY3RXYWxsZXQiLCJlcnJvciIsImR1cmF0aW9uIiwibmFtZSIsIndhbGxldEFkZHJlc3MiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwicmVsIiwiaHJlZiIsImFyaWEtbGFiZWwiLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});