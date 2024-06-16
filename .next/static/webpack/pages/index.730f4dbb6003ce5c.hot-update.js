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

/***/ "./components/SwapComponent.js":
/*!*************************************!*\
  !*** ./components/SwapComponent.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase allowance\";\n    var ENTER_AMOUNT = \"Enter an amount\";\n    var CONNECT_WALLET = \"Connect wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(msg, {\n            duration: 600\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Transaction completed.\");\n    };\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_10__.useAccount)().address;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        //text for submit button\n        if (!address) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, [\n        inputValue,\n        outputValue,\n        address\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (document.activeElement != outputValueRef.current && document.activeElement.ariaLabel !== \"srcToken\" && !isReversed.current) populateOutputValue(inputValue);\n        setSrcTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            obj: srcTokenObj,\n            ref: inputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n            lineNumber: 81,\n            columnNumber: 21\n        }, _this));\n        if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) setOutputValue(\"\");\n    }, [\n        inputValue,\n        destToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (document.activeElement != inputValueRef.current && document.activeElement.ariaLabel !== \"destToken\" && !isReversed.current) populateInputValue(outputValue);\n        setDestTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            obj: destTokenObj,\n            ref: outputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n            lineNumber: 94,\n            columnNumber: 22\n        }, _this));\n        if ((outputValue === null || outputValue === void 0 ? void 0 : outputValue.length) === 0) setInputValue(\"\");\n        //resetting the isrev value if its set\n        if (isReversed.current) isReversed.current = false;\n    }, [\n        outputValue,\n        srcToken\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"border-[1px] rounded-l border-[#7765F3] bg-[#7765F3] w-[100%] p-4 px-6 rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between py-4 px-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"Swap\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.CogIcon, {\n                        className: \"h-6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: [\n                    srcTokenComp,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.ArrowSmDownIcon, {\n                        className: \"absolute left-1/2 -translate-x-1/2 -buttom-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110\",\n                        onClick: handleReverseExchange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: destTokenComp\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: getSwapBtnClassName(),\n                onClick: function() {\n                    if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();\n                    else if (swapBtnText === SWAP) handleSwap();\n                },\n                children: swapBtnText\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, _this),\n            txPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TransactionStatus__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 136,\n                columnNumber: 21\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, _this);\n    function handleSwap() {\n        return _handleSwap.apply(this, arguments);\n    }\n    function _handleSwap() {\n        _handleSwap = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        {\n                            performSwap();\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 4:\n                        setTxPending(true);\n                        _ctx.next = 7;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.hasValidAllowance)(address, srcToken, inputValue);\n                    case 7:\n                        result = _ctx.sent;\n                        setTxPending(false);\n                        if (result) performSwap();\n                        else handleInsufficientAllowance();\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSwap.apply(this, arguments);\n    }\n    function handleIncreaseAllowance() {\n        return _handleIncreaseAllowance.apply(this, arguments);\n    }\n    function _handleIncreaseAllowance() {\n        _handleIncreaseAllowance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setTxPending(true);\n                        _ctx.next = 3;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.increaseAllowance)(srcToken, inputValue);\n                    case 3:\n                        setTxPending(false);\n                        setSwapBtnText();\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleIncreaseAllowance.apply(this, arguments);\n    }\n};\n_s(SwapComponent, \"1082vP4cCXDbY0OEFTby5eDS7IM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_10__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bXBvbmVudC5qcz85MmVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIGhhc1ZhbGlkQWxsb3dhbmNlLFxuICBpbmNyZWFzZUFsbG93YW5jZSxcbiAgc3dhcEV0aFRvVG9rZW4sXG4gIHN3YXBUb2tlblRvRXRoLFxuICBzd2FwVG9rZW5Ub1Rva2VuLFxufSBmcm9tIFwiLi4vdXRpbHMvY29udGV4dFwiO1xuXG5pbXBvcnQgeyBDb2dJY29uLCBBcnJvd1NtRG93bkljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQgU3dhcEZpZWxkIGZyb20gXCIuL1N3YXBGaWVsZFwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uU3RhdHVzIGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcbmltcG9ydCB7IERFRkFVTFRfVkFMVUUsIEVUSCB9IGZyb20gXCIuLi91dGlscy9zYWxlVG9rZW5cIjtcbmltcG9ydCB7IHRvRXRoLCB0b1dlaSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgdXNlQWNjb3VudCB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgcG9wdWxhdGUgfSBmcm9tIFwiZG90ZW52XCI7XG5cbmNvbnN0IFN3YXBDb21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFtzcmNUb2tlbiwgc2V0U3JjVG9rZW5dID0gdXNlU3RhdGUoRVRIKTtcbiAgY29uc3QgW2Rlc3RUb2tlbiwgc2V0RGVzdFRva2VuXSA9ICB1c2VTdGF0ZShERUZBVUxUX1ZBTFVFKTtcblxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbb3V0cHV0VmFsdWUsIHNldE91dHB1dFZhbHVlXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgaW5wdXRWYWx1ZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBvdXRwdXRWYWx1ZVJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGlzUmV2ZXJzZWQgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGNvbnN0IElOQ1JFQVNFX0FMTE9XQU5DRSA9IFwiSW5jcmVhc2UgYWxsb3dhbmNlXCI7XG4gIGNvbnN0IEVOVEVSX0FNT1VOVCA9IFwiRW50ZXIgYW4gYW1vdW50XCI7XG4gIGNvbnN0IENPTk5FQ1RfV0FMTEVUID1cIkNvbm5lY3Qgd2FsbGV0XCI7XG4gIGNvbnN0IFNXQVAgPVwiU3dhcFwiO1xuXG4gIGNvbnN0IHNyY1Rva2VuT2JqID0ge1xuICAgIGlkOiBcInNyY1Rva2VuXCIsXG4gICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgc2V0VmFsdWU6IHNldElucHV0VmFsdWUsXG4gICAgZGVmYXVsdFZhbHVlOiBzcmNUb2tlbixcbiAgICBpZ25vcmVWYWx1ZTogZGVzdFRva2VuLFxuICAgIHNldFRva2VuOiBzZXRTcmNUb2tlbixcbiAgfTtcblxuICBjb25zdCBkZXN0VG9rZW5PYmogPSB7XG4gICAgaWQ6IFwiZGVzdFRva2VuXCIsXG4gICAgdmFsdWU6IG91dHB1dFZhbHVlLFxuICAgIHNldFZhbHVlOiBzZXRPdXRwdXRWYWx1ZSxcbiAgICBkZWZhdWx0VmFsdWU6IGRlc3RUb2tlbixcbiAgICBpZ25vcmVWYWx1ZTogc3JjVG9rZW4sXG4gICAgc2V0VG9rZW46IHNldERlc3RUb2tlbixcbiAgfTtcblxuICBjb25zdCBbc3JjVG9rZW5Db21wLCBzZXRTcmNUb2tlbkNvbXBdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Rlc3RUb2tlbkNvbXAsIHNldERlc3RUb2tlbkNvbXBdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBbc3dhcEJ0blRleHQsIHNldFN3YXBCdG5UZXh0XSA9IHVzZVN0YXRlKEVOVEVSX0FNT1VOVCk7XG4gIGNvbnN0IFt0eFBlbmRpbmcsIHNldFR4UGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgbm90aWZ5RXJyb3IgPSAobXNnKSA9PiB0b2FzdC5lcnJvcihtc2csIHtkdXJhdGlvbjogNjAwIH0pO1xuICBjb25zdCBub3RpZnlTdWNjZXNzID0gKCkgPT4gdG9hc3Quc3VjY2VzcyhcIlRyYW5zYWN0aW9uIGNvbXBsZXRlZC5cIik7XG5cbiAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL3RleHQgZm9yIHN1Ym1pdCBidXR0b25cblxuICAgIGlmICghYWRkcmVzcykgc2V0U3dhcEJ0blRleHQoQ09OTkVDVF9XQUxMRVQpO1xuICAgIGVsc2UgaWYgKCFpbnB1dFZhbHVlIHx8ICFvdXRwdXRWYWx1ZSkgc2V0U3dhcEJ0blRleHQoRU5URVJfQU1PVU5UKTtcbiAgICBlbHNlIHNldFN3YXBCdG5UZXh0KFNXQVApXG4gIH0sIFtpbnB1dFZhbHVlLCBvdXRwdXRWYWx1ZSwgYWRkcmVzc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPSBvdXRwdXRWYWx1ZVJlZi5jdXJyZW50ICYmXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmFyaWFMYWJlbCAhPT0gXCJzcmNUb2tlblwiICYmXG4gICAgICAhaXNSZXZlcnNlZC5jdXJyZW50XG4gICAgKVxuICAgIHBvcHVsYXRlT3V0cHV0VmFsdWUoaW5wdXRWYWx1ZSk7XG5cbiAgICBzZXRTcmNUb2tlbkNvbXAoPFN3YXBGaWVsZCBvYmo9e3NyY1Rva2VuT2JqfSByZWY9e2lucHV0VmFsdWVSZWZ9IC8+KTtcblxuICAgIGlmIChpbnB1dFZhbHVlPy5sZW5ndGggPT09IDApIHNldE91dHB1dFZhbHVlKFwiXCIpO1xuICB9LCBbaW5wdXRWYWx1ZSwgZGVzdFRva2VuXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9IGlucHV0VmFsdWVSZWYuY3VycmVudCAmJlxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5hcmlhTGFiZWwgIT09IFwiZGVzdFRva2VuXCIgJiZcbiAgICAgICFpc1JldmVyc2VkLmN1cnJlbnRcbiAgICApXG4gICAgcG9wdWxhdGVJbnB1dFZhbHVlKG91dHB1dFZhbHVlKTtcblxuICAgIHNldERlc3RUb2tlbkNvbXAoPFN3YXBGaWVsZCBvYmo9e2Rlc3RUb2tlbk9ian0gcmVmPXtvdXRwdXRWYWx1ZVJlZn0gLz4pO1xuXG4gICAgaWYgKG91dHB1dFZhbHVlPy5sZW5ndGggPT09IDApIHNldElucHV0VmFsdWUoXCJcIik7XG5cbiAgICAvL3Jlc2V0dGluZyB0aGUgaXNyZXYgdmFsdWUgaWYgaXRzIHNldFxuICAgIGlmIChpc1JldmVyc2VkLmN1cnJlbnQpIGlzUmV2ZXJzZWQuY3VycmVudCA9IGZhbHNlO1xuICB9LCBbb3V0cHV0VmFsdWUsIHNyY1Rva2VuXSk7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLVsxcHhdIHJvdW5kZWQtbCBib3JkZXItWyM3NzY1RjNdIGJnLVsjNzc2NUYzXSB3LVsxMDAlXSBwLTRcbiAgICBweC02IHJvdW5kZWQteGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTQgcHgtMVwiPlxuICAgICAgICA8cD5Td2FwPC9wPlxuICAgICAgICA8Q29nSWNvbiBjbGFzc05hbWU9XCJoLTZcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLVsjMjEyNDI5XSBwLTQgcHktNiByb3VuZGVkLXhsIG1iLTIgYm9yZGVyLVsycHhdXG4gICAgICBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLXppbmMtNjAwXCI+XG4gICAgICAgIHtzcmNUb2tlbkNvbXB9XG5cbiAgICAgICAgPEFycm93U21Eb3duSWNvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgLWJ1dHRvbS02IGgtMTAgcC0xIGJnLVsjMjEyNDI5XVxuICAgICAgICAgIGJvcmRlci00IGJvcmRlci16aW5jLTkwMCB0ZXh0LXppbmMtMzAwIHJvdW5kZWQteGwgY3Vyc29yLXBvaW50ZXJcbiAgICAgICAgICBob3ZlcjpzY2FsZS0xMTBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJldmVyc2VFeGNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMjEyNDI5XSBwLTQgcHktNiByb3VuZGVkLXhsIG10LTIgYm9yZGVyLVsycHhdXG4gICAgICBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLXppbmMtNjAwXCI+XG4gICAgICAgIHtkZXN0VG9rZW5Db21wfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtnZXRTd2FwQnRuQ2xhc3NOYW1lKCl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoc3dhcEJ0blRleHQgPT09IElOQ1JFQVNFX0FMTE9XQU5DRSkgaGFuZGxlSW5jcmVhc2VBbGxvd2FuY2UoKTtcbiAgICAgICAgICBlbHNlIGlmIChzd2FwQnRuVGV4dCA9PT0gU1dBUCkgaGFuZGxlU3dhcCgpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7c3dhcEJ0blRleHR9XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAge3R4UGVuZGluZyAmJiA8VHJhbnNhY3Rpb25TdGF0dXMgLz59XG5cbiAgICAgIDxUb2FzdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3dhcCgpIHtcbiAgICBpZiAoc3JjVG9rZW4gPT09IEVUSCAmJiBkZXN0VG9rZW4gIT09IEVUSCkge1xuICAgICAgcGVyZm9ybVN3YXAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VHhQZW5kaW5nKHRydWUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaGFzVmFsaWRBbGxvd2FuY2UoYWRkcmVzcywgc3JjVG9rZW4sIGlucHV0VmFsdWUpO1xuICAgICAgc2V0VHhQZW5kaW5nKGZhbHNlKTtcblxuICAgICAgaWYgKHJlc3VsdCkgcGVyZm9ybVN3YXAoKTtcbiAgICAgIGVsc2UgaGFuZGxlSW5zdWZmaWNpZW50QWxsb3dhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlSW5jcmVhc2VBbGxvd2FuY2UoKSB7XG4gICAgc2V0VHhQZW5kaW5nKHRydWUpO1xuICAgIGF3YWl0IGluY3JlYXNlQWxsb3dhbmNlKHNyY1Rva2VuLCBpbnB1dFZhbHVlKTtcbiAgICBzZXRUeFBlbmRpbmcoZmFsc2UpO1xuXG4gICAgc2V0U3dhcEJ0blRleHQoKVxuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFN3YXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImhhc1ZhbGlkQWxsb3dhbmNlIiwiaW5jcmVhc2VBbGxvd2FuY2UiLCJzd2FwRXRoVG9Ub2tlbiIsInN3YXBUb2tlblRvRXRoIiwic3dhcFRva2VuVG9Ub2tlbiIsIkNvZ0ljb24iLCJBcnJvd1NtRG93bkljb24iLCJTd2FwRmllbGQiLCJUcmFuc2FjdGlvblN0YXR1cyIsInRvYXN0IiwiVG9hc3RlciIsIkRFRkFVTFRfVkFMVUUiLCJFVEgiLCJ0b0V0aCIsInRvV2VpIiwidXNlQWNjb3VudCIsInBvcHVsYXRlIiwiU3dhcENvbXBvbmVudCIsInNyY1Rva2VuIiwic2V0U3JjVG9rZW4iLCJkZXN0VG9rZW4iLCJzZXREZXN0VG9rZW4iLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIm91dHB1dFZhbHVlIiwic2V0T3V0cHV0VmFsdWUiLCJpbnB1dFZhbHVlUmVmIiwib3V0cHV0VmFsdWVSZWYiLCJpc1JldmVyc2VkIiwiSU5DUkVBU0VfQUxMT1dBTkNFIiwiRU5URVJfQU1PVU5UIiwiQ09OTkVDVF9XQUxMRVQiLCJTV0FQIiwic3JjVG9rZW5PYmoiLCJpZCIsInZhbHVlIiwic2V0VmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJpZ25vcmVWYWx1ZSIsInNldFRva2VuIiwiZGVzdFRva2VuT2JqIiwic3JjVG9rZW5Db21wIiwic2V0U3JjVG9rZW5Db21wIiwiZGVzdFRva2VuQ29tcCIsInNldERlc3RUb2tlbkNvbXAiLCJzd2FwQnRuVGV4dCIsInNldFN3YXBCdG5UZXh0IiwidHhQZW5kaW5nIiwic2V0VHhQZW5kaW5nIiwibm90aWZ5RXJyb3IiLCJtc2ciLCJlcnJvciIsImR1cmF0aW9uIiwibm90aWZ5U3VjY2VzcyIsInN1Y2Nlc3MiLCJhZGRyZXNzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiY3VycmVudCIsImFyaWFMYWJlbCIsInBvcHVsYXRlT3V0cHV0VmFsdWUiLCJvYmoiLCJyZWYiLCJsZW5ndGgiLCJwb3B1bGF0ZUlucHV0VmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwib25DbGljayIsImhhbmRsZVJldmVyc2VFeGNoYW5nZSIsImJ1dHRvbiIsImdldFN3YXBCdG5DbGFzc05hbWUiLCJoYW5kbGVJbmNyZWFzZUFsbG93YW5jZSIsImhhbmRsZVN3YXAiLCJyZXN1bHQiLCJwZXJmb3JtU3dhcCIsImhhbmRsZUluc3VmZmljaWVudEFsbG93YW5jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});