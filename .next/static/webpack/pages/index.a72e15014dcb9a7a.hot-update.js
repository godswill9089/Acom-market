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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./components/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), tokenBalComp = ref[0], setTokenBalComp = ref[1];\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)().address;\n    var notifyConnectWallet = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Connect wallet.\", {\n            duration: 2000\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTokenBalComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                    name: \"USD Coin\",\n                    walletAddress: address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                    name: \"BNB\",\n                    walletAddress: address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                    name: \"SHIBA INU\",\n                    walletAddress: address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true));\n        if (!address) notifyConnectWallet();\n    }, [\n        address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"p-4 text-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex justify-between h-16 mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                rel: \"noopener noreferrer\",\n                                href: \"#\",\n                                \"aria-label\": \"Back to homepage\",\n                                className: \"flex items-center p-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.Logo, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"items-stretch hidden space-x-3 lg:flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            rel: \"noopener noreferrer\",\n                                            href: \"/\",\n                                            className: \"flex items-center px-4 -mb-1 dark:border-transparent text- [#7765F3] border-[#7765F3]\",\n                                            children: \"Swap\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            rel: \"noopener noreferrer\",\n                                            href: \"/tokens\",\n                                            className: \"flex items-center px-4 -mb-1 dark:border-transparent\",\n                                            children: \"Token\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            rel: \"noopener noreferrer\",\n                                            href: \"/tokens\",\n                                            className: \"flex items-center px-4 -mb-1 dark:border-transparent\",\n                                            children: \"NFTs\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            rel: \"noopener noreferrer\",\n                                            href: \"/tokens\",\n                                            className: \"flex items-center px-4 -mb-1 dark:border-transparent\",\n                                            children: \"Pool\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"items-center flex-shrink-0 hidden lg:flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                                name: \"USD Coin\",\n                                walletAddress: address\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.TokenBalance, {\n                                name: \"SHIBA INU\",\n                                walletAddress: address\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.ConnectButton, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-4 lg:hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Header.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"dopXMu++gF5Hh7gBSACLYAlxNm0=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxVQUFVO2dDQUFFQyxhQUFhLEVBQUVMLE9BQU87Ozs7O3FDQUFJOzBDQUMxRCw4REFBQ0osZ0RBQVk7Z0NBQUNRLElBQUksRUFBRSxXQUFXO2dDQUFFQyxhQUFhLEVBQUVMLE9BQU87Ozs7O3FDQUFJOzBDQUMzRCw4REFBQ1YsaUVBQWE7Ozs7cUNBQUc7Ozs7Ozs2QkFDZjtrQ0FDTiw4REFBQ3lCLFFBQU07d0JBQUNSLFNBQVMsRUFBQyxlQUFlO2tDQUMvQiw0RUFBQ2Isd0NBQUk7Ozs7aUNBQUc7Ozs7OzZCQUNEOzs7Ozs7cUJBQ0w7MEJBQ04sOERBQUNELG9EQUFPOzs7O3FCQUFHOzs7Ozs7YUFDSixDQUNUO0NBQ0g7R0FwRktJLE1BQU07O1FBR1VOLDZDQUFVOzs7QUFIMUJNLEtBQUFBLE1BQU07QUFzRlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb25uZWN0QnV0dG9uIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcbmltcG9ydCB7IHVzZUFjY291bnQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuXG5pbXBvcnQgeyBNZW51LCBMb2dvLCBUb2tlbkJhbGFuY2UgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2tlbkJhbENvbXAsIHNldFRva2VuQmFsQ29tcF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xuXG4gIGNvbnN0IG5vdGlmeUNvbm5lY3RXYWxsZXQgPSAoKSA9PiBcbiAgICB0b2FzdC5lcnJvcihcIkNvbm5lY3Qgd2FsbGV0LlwiLCB7IGR1cmF0aW9uOiAyMDAwIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VG9rZW5CYWxDb21wKFxuICAgICAgPD5cbiAgICAgICAgPFRva2VuQmFsYW5jZSBuYW1lPXtcIlVTRCBDb2luXCJ9IHdhbGxldEFkZHJlc3M9e2FkZHJlc3N9IC8+XG4gICAgICAgIDxUb2tlbkJhbGFuY2UgbmFtZT17XCJCTkJcIn0gd2FsbGV0QWRkcmVzcz17YWRkcmVzc30gLz5cbiAgICAgICAgPFRva2VuQmFsYW5jZSBuYW1lPXtcIlNISUJBIElOVVwifSB3YWxsZXRBZGRyZXNzPXthZGRyZXNzfSAvPlxuICAgICAgPC8+XG4gICAgKTtcblxuICAgIGlmICghYWRkcmVzcykgbm90aWZ5Q29ubmVjdFdhbGxldCgpO1xuICB9LCBbYWRkcmVzc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJwLTQgdGV4dC1ncmF5LTEwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBqdXN0aWZ5LWJldHdlZW4gaC0xNiBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCYWNrIHRvIGhvbWVwYWdlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIml0ZW1zLXN0cmV0Y2ggaGlkZGVuIHNwYWNlLXgtMyBsZzpmbGV4XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtNCAtbWItMSBkYXJrOmJvcmRlci10cmFuc3BhcmVudCB0ZXh0LVxuICAgICAgICAgICAgICAgIFsjNzc2NUYzXSBib3JkZXItWyM3NzY1RjNdXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN3YXBcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIvdG9rZW5zXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC00IC1tYi0xIGRhcms6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRva2VuXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiL3Rva2Vuc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtNCAtbWItMSBkYXJrOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBORlRzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiL3Rva2Vuc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtNCAtbWItMSBkYXJrOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQb29sXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGZsZXgtc2hyaW5rLTAgaGlkZGVuIGxnOmZsZXhcIj5cbiAgICAgICAgICAgIDxUb2tlbkJhbGFuY2UgbmFtZT17XCJVU0QgQ29pblwifSB3YWxsZXRBZGRyZXNzPXthZGRyZXNzfSAvPlxuICAgICAgICAgICAgPFRva2VuQmFsYW5jZSBuYW1lPXtcIlNISUJBIElOVVwifSB3YWxsZXRBZGRyZXNzPXthZGRyZXNzfSAvPlxuICAgICAgICAgICAgPENvbm5lY3RCdXR0b24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC00IGxnOmhpZGRlblwiPlxuICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8VG9hc3RlciAvPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb25uZWN0QnV0dG9uIiwidXNlQWNjb3VudCIsInRvYXN0IiwiVG9hc3RlciIsIk1lbnUiLCJMb2dvIiwiVG9rZW5CYWxhbmNlIiwiSGVhZGVyIiwidG9rZW5CYWxDb21wIiwic2V0VG9rZW5CYWxDb21wIiwiYWRkcmVzcyIsIm5vdGlmeUNvbm5lY3RXYWxsZXQiLCJlcnJvciIsImR1cmF0aW9uIiwibmFtZSIsIndhbGxldEFkZHJlc3MiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwicmVsIiwiaHJlZiIsImFyaWEtbGFiZWwiLCJ1bCIsImxpIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});