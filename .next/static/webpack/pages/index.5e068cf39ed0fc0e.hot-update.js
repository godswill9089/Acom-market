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

/***/ "./components/SingleCard.js":
/*!**********************************!*\
  !*** ./components/SingleCard.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SingleCard = function(param) {\n    var index = param.index, name = param.name, walletAddress = param.walletAddress;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"-\"), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), tokenAddress = ref1[0], setTokenAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardIcon\n    }), copyIcon = ref2[0], setCopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txPending = ref3[0], setTxPending = ref3[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(\"Transaction completed\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (name && walletAddress) {\n            fetchTokenBalance();\n            fetchTokenAddress();\n        } else setBalance(\"-\");\n    }, [\n        name,\n        walletAddress\n    ]);\n    function fetchTokenBalance() {\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function _fetchTokenBalance() {\n        _fetchTokenBalance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var bal, fBal;\n            return C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenBalance)(name, walletAddress);\n                    case 2:\n                        bal = _ctx.sent;\n                        fBal = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(bal.toString(), 18);\n                        setBalance(fBal.toString());\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenBalance.apply(this, arguments);\n    }\n    function fetchTokenAddress() {\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    function _fetchTokenAddress() {\n        _fetchTokenAddress = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var address;\n            return C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.getTokenAddress)(name);\n                    case 2:\n                        address = _ctx.sent;\n                        setTokenAddress(address);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n        className: \"flex flex-col bg-[#212429]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                rel: \"noopener noreferrer\",\n                href: \"#\",\n                \"aria-label\": \"Te nulla oportere reprimique his dolorum\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    alt: \"\",\n                    className: \"object-cover w-full h-62 bg-gray-500\",\n                    src: \"img/\".concat(index + 1, \".png\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SingleCard.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SingleCard.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col flex-1 p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        rel: \"noopener noreferrer\",\n                        href: \"#\",\n                        \"aria-label\": \"Te nulla oportere reprimique his dolorum\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SingleCard.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        rel: \"noopener noreferrer\",\n                        href: \"#\",\n                        className: \"text-xs tracki uppercase hover:underline text-[#7765F3]\",\n                        children: [\n                            name,\n                            \" 10 M Supply\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SingleCard.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        className: \"flex-1 py-2 text-lg font-semibold leadi\",\n                        children: [\n                            \"Get \",\n                            name,\n                            \" token\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SingleCard.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SingleCard.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SingleCard.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this);\n};\n_s(SingleCard, \"L6iFJ9gEI9N2BVpzrUo1y9HtTRA=\");\n_c = SingleCard;\nvar _c;\n$RefreshReg$(_c, \"SingleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztxQkFDQTswQkFDSiw4REFBQ21DLEtBQUc7Z0JBQUNSLFNBQVMsRUFBQywwQkFBMEI7O2tDQUN2Qyw4REFBQ0MsR0FBQzt3QkFDQUMsR0FBRyxFQUFDLHFCQUFxQjt3QkFDekJDLElBQUksRUFBQyxHQUFHO3dCQUNSQyxZQUFVLEVBQUMsMENBQTBDOzs7Ozs2QkFFbkQ7a0NBQ0osOERBQUNILEdBQUM7d0JBQ0FDLEdBQUcsRUFBQyxxQkFBcUI7d0JBQ3pCQyxJQUFJLEVBQUMsR0FBRzt3QkFDUkgsU0FBUyxFQUFDLHlEQUF5RDs7NEJBRWxFMUIsSUFBSTs0QkFBQyxjQUNSOzs7Ozs7NkJBQUk7a0NBRUosOERBQUNtQyxJQUFFO3dCQUFDVCxTQUFTLEVBQUMseUNBQXlDOzs0QkFBQyxNQUNsRDs0QkFBQzFCLElBQUk7NEJBQUMsUUFDWjs7Ozs7OzZCQUFLOzs7Ozs7cUJBQ0Q7Ozs7OzthQUNFLENBQ1g7Q0FDRjtHQS9ES0YsVUFBVTtBQUFWQSxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2luZ2xlQ2FyZC5qcz8yM2U2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIGdldFRva2VuQWRkcmVzcyxcbiAgZ2V0VG9rZW5CYWxhbmNlLFxuICBpbmNyZWFzZUFsbG93YW5jZSxcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnRleHRcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBUcmFuc2FjdGlvblN0YXR1cyBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbmltcG9ydCB7XG4gIENsaXBib2FyZEljb24sXG4gIENsaXBib2FyZENoZWNrSWNvbixcbiAgUGx1c0ljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcblxuY29uc3QgU2luZ2xlQ2FyZCA9ICh7IGluZGV4LCBuYW1lLCB3YWxsZXRBZGRyZXNzIH0pID0+IHtcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCItXCIpO1xuICBjb25zdCBbdG9rZW5BZGRyZXNzLCBzZXRUb2tlbkFkZHJlc3NdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBbY29weUljb24sIHNldENvcHlJY29uXSA9IHVzZVN0YXRlKHsgaWNvbjogQ2xpcGJvYXJkSWNvbiB9KTtcblxuICBjb25zdCBbdHhQZW5kaW5nLCBzZXRUeFBlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG5vdGlmeUVycm9yID0gKG1zZykgPT4gdG9hc3QuZXJyb3IobXNnLCB7IGR1cmF0aW9uOiA2MDAwIH0pO1xuICBjb25zdCBub3RpZnlTdWNjZXNzID0gKCkgPT4gdG9hc3Quc3VjY2VzcyhcIlRyYW5zYWN0aW9uIGNvbXBsZXRlZFwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChuYW1lICYmIHdhbGxldEFkZHJlc3MpIHtcbiAgICAgIGZldGNoVG9rZW5CYWxhbmNlKCk7XG4gICAgICBmZXRjaFRva2VuQWRkcmVzcygpO1xuICAgIH0gZWxzZSBzZXRCYWxhbmNlKFwiLVwiKTtcbiAgfSwgW25hbWUsIHdhbGxldEFkZHJlc3NdKTtcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFRva2VuQmFsYW5jZSgpIHtcbiAgICBjb25zdCBiYWwgPSBhd2FpdCBnZXRUb2tlbkJhbGFuY2UobmFtZSwgd2FsbGV0QWRkcmVzcyk7XG5cbiAgICBjb25zdCBmQmFsID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGJhbC50b1N0cmluZygpLCAxOCk7XG4gICAgc2V0QmFsYW5jZShmQmFsLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2tlbkFkZHJlc3MoKSB7XG4gICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IGdldFRva2VuQWRkcmVzcyhuYW1lKTtcbiAgICBzZXRUb2tlbkFkZHJlc3MoYWRkcmVzcyk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJnLVsjMjEyNDI5XVwiPlxuICAgICAgPGFcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlRlIG51bGxhIG9wb3J0ZXJlIHJlcHJpbWlxdWUgaGlzIGRvbG9ydW1cIlxuICAgICAgPlxuICAgICAgICA8aW1nIFxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLTYyIGJnLWdyYXktNTAwXCJcbiAgICAgICAgICBzcmM9e2BpbWcvJHtpbmRleCArIDF9LnBuZ2B9XG4gICAgICAgIC8+XG4gICAgICA8L2E+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC0xIHAtNlwiPlxuICAgICAgICA8YVxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVGUgbnVsbGEgb3BvcnRlcmUgcmVwcmltaXF1ZSBoaXMgZG9sb3J1bVwiXG4gICAgICAgID5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YVxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRyYWNraSB1cHBlcmNhc2UgaG92ZXI6dW5kZXJsaW5lIHRleHQtWyM3NzY1RjNdXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtuYW1lfSAxMCBNIFN1cHBseVxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yIHRleHQtbGcgZm9udC1zZW1pYm9sZCBsZWFkaVwiPlxuICAgICAgICAgIEdldCB7bmFtZX0gdG9rZW5cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiZ2V0VG9rZW5BZGRyZXNzIiwiZ2V0VG9rZW5CYWxhbmNlIiwiaW5jcmVhc2VBbGxvd2FuY2UiLCJldGhlcnMiLCJUcmFuc2FjdGlvblN0YXR1cyIsInRvYXN0IiwiVG9hc3RlciIsIkNsaXBib2FyZEljb24iLCJDbGlwYm9hcmRDaGVja0ljb24iLCJQbHVzSWNvbiIsIlNpbmdsZUNhcmQiLCJpbmRleCIsIm5hbWUiLCJ3YWxsZXRBZGRyZXNzIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJ0b2tlbkFkZHJlc3MiLCJzZXRUb2tlbkFkZHJlc3MiLCJpY29uIiwiY29weUljb24iLCJzZXRDb3B5SWNvbiIsInR4UGVuZGluZyIsInNldFR4UGVuZGluZyIsIm5vdGlmeUVycm9yIiwibXNnIiwiZXJyb3IiLCJkdXJhdGlvbiIsIm5vdGlmeVN1Y2Nlc3MiLCJzdWNjZXNzIiwiZmV0Y2hUb2tlbkJhbGFuY2UiLCJmZXRjaFRva2VuQWRkcmVzcyIsImJhbCIsImZCYWwiLCJ1dGlscyIsImZvcm1hdFVuaXRzIiwidG9TdHJpbmciLCJhZGRyZXNzIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImEiLCJyZWwiLCJocmVmIiwiYXJpYS1sYWJlbCIsImltZyIsImFsdCIsInNyYyIsImRpdiIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SingleCard.js\n"));

/***/ })

});