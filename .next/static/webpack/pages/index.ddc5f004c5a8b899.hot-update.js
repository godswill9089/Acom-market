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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    var handleReverseExchange = function handleReverseExchange(e) {\n        isReversed.current = true;\n        setInputValue(outputValue);\n        setOutputValue(inputValue);\n        setSrcToken(destToken);\n        setDestToken(srcToken);\n    };\n    var getSwapBtnClassName = function getSwapBtnClassName() {\n        var className = \"p-4 w-full my-2 rounded-xl\";\n        className += swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET ? \"text-zinc-400 bg-zinc-800 pointer-events-none\" : \"bg-blue-700\";\n        className += swapBtnText === INCREASE_ALLOWANCE ? \"bg-yellow-600\" : \"\";\n        return className;\n    };\n    var populateOutputValue = function populateOutputValue() {\n        if (destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE || srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE || !inputValue) return;\n        tr;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase allowance\";\n    var ENTER_AMOUNT = \"Enter an amount\";\n    var CONNECT_WALLET = \"Connect wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(msg, {\n            duration: 600\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Transaction completed.\");\n    };\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_10__.useAccount)().address;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        //text for submit button\n        if (!address) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, [\n        inputValue,\n        outputValue,\n        address\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (document.activeElement != outputValueRef.current && document.activeElement.ariaLabel !== \"srcToken\" && !isReversed.current) populateOutputValue(inputValue);\n        setSrcTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            obj: srcTokenObj,\n            ref: inputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n            lineNumber: 81,\n            columnNumber: 21\n        }, _this));\n        if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) setOutputValue(\"\");\n    }, [\n        inputValue,\n        destToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (document.activeElement != inputValueRef.current && document.activeElement.ariaLabel !== \"destToken\" && !isReversed.current) populateInputValue(outputValue);\n        setDestTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            obj: destTokenObj,\n            ref: outputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n            lineNumber: 94,\n            columnNumber: 22\n        }, _this));\n        if ((outputValue === null || outputValue === void 0 ? void 0 : outputValue.length) === 0) setInputValue(\"\");\n        //resetting the isrev value if its set\n        if (isReversed.current) isReversed.current = false;\n    }, [\n        outputValue,\n        srcToken\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"border-[1px] rounded-l border-[#7765F3] bg-[#7765F3] w-[100%] p-4 px-6 rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between py-4 px-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"Swap\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.CogIcon, {\n                        className: \"h-6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: [\n                    srcTokenComp,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.ArrowSmDownIcon, {\n                        className: \"absolute left-1/2 -translate-x-1/2 -buttom-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110\",\n                        onClick: handleReverseExchange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: destTokenComp\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: getSwapBtnClassName(),\n                onClick: function() {\n                    if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();\n                    else if (swapBtnText === SWAP) handleSwap();\n                },\n                children: swapBtnText\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, _this),\n            txPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TransactionStatus__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 136,\n                columnNumber: 21\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, _this);\n    function handleSwap() {\n        return _handleSwap.apply(this, arguments);\n    }\n    function _handleSwap() {\n        _handleSwap = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        {\n                            performSwap();\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 4:\n                        setTxPending(true);\n                        _ctx.next = 7;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.hasValidAllowance)(address, srcToken, inputValue);\n                    case 7:\n                        result = _ctx.sent;\n                        setTxPending(false);\n                        if (result) performSwap();\n                        else handleInsufficientAllowance();\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSwap.apply(this, arguments);\n    }\n    function handleIncreaseAllowance() {\n        return _handleIncreaseAllowance.apply(this, arguments);\n    }\n    function _handleIncreaseAllowance() {\n        _handleIncreaseAllowance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setTxPending(true);\n                        _ctx.next = 3;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.increaseAllowance)(srcToken, inputValue);\n                    case 3:\n                        setTxPending(false);\n                        setSwapBtnText(SWAP);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleIncreaseAllowance.apply(this, arguments);\n    }\n};\n_s(SwapComponent, \"1082vP4cCXDbY0OEFTby5eDS7IM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_10__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFOzRCQUN6Q2lFLFdBQVcsRUFBRSxDQUFDO3lCQUNmOzs7O3dCQUNDdEIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDOzsrQkFDRXZELGlFQUFpQixDQUFDOEQsT0FBTyxFQUFFakMsUUFBUSxFQUFFSixVQUFVLENBQUM7O3dCQUEvRG1ELE1BQU0sWUFBeUQ7d0JBQ3JFckIsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUVwQixJQUFJcUIsTUFBTSxFQUFFQyxXQUFXLEVBQUUsQ0FBQzs2QkFDckJDLDJCQUEyQixFQUFFLENBQUM7Ozs7OztTQUV0QztlQVhjSCxXQUFVOzthQWFWRCx1QkFBdUI7ZUFBdkJBLHdCQUF1Qjs7YUFBdkJBLHdCQUF1QjtRQUF2QkEsd0JBQXVCLEdBQXRDLHVQQUF5Qzs7Ozt3QkFDdkNuQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7OytCQUNidEQsaUVBQWlCLENBQUM0QixRQUFRLEVBQUVKLFVBQVUsQ0FBQzs7d0JBQzdDOEIsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUVwQkYsY0FBYyxDQUFDYixJQUFJLENBQUMsQ0FBQzs7Ozs7O1NBQ3RCO2VBTmNrQyx3QkFBdUI7O0NBc0N2QztHQTlLS3pELGFBQWE7O1FBNENHRiw4Q0FBVTs7O0FBNUMxQkUsS0FBQUEsYUFBYTtBQWlMbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N3YXBDb21wb25lbnQuanM/OTJlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBoYXNWYWxpZEFsbG93YW5jZSxcbiAgaW5jcmVhc2VBbGxvd2FuY2UsXG4gIHN3YXBFdGhUb1Rva2VuLFxuICBzd2FwVG9rZW5Ub0V0aCxcbiAgc3dhcFRva2VuVG9Ub2tlbixcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgQ29nSWNvbiwgQXJyb3dTbURvd25JY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0IFN3YXBGaWVsZCBmcm9tIFwiLi9Td2FwRmllbGRcIjtcbmltcG9ydCBUcmFuc2FjdGlvblN0YXR1cyBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyBERUZBVUxUX1ZBTFVFLCBFVEggfSBmcm9tIFwiLi4vdXRpbHMvc2FsZVRva2VuXCI7XG5pbXBvcnQgeyB0b0V0aCwgdG9XZWkgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IHVzZUFjY291bnQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IHBvcHVsYXRlIH0gZnJvbSBcImRvdGVudlwiO1xuXG5jb25zdCBTd2FwQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbc3JjVG9rZW4sIHNldFNyY1Rva2VuXSA9IHVzZVN0YXRlKEVUSCk7XG4gIGNvbnN0IFtkZXN0VG9rZW4sIHNldERlc3RUb2tlbl0gPSAgdXNlU3RhdGUoREVGQVVMVF9WQUxVRSk7XG5cbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW291dHB1dFZhbHVlLCBzZXRPdXRwdXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGlucHV0VmFsdWVSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgb3V0cHV0VmFsdWVSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBpc1JldmVyc2VkID0gdXNlUmVmKGZhbHNlKTtcblxuICBjb25zdCBJTkNSRUFTRV9BTExPV0FOQ0UgPSBcIkluY3JlYXNlIGFsbG93YW5jZVwiO1xuICBjb25zdCBFTlRFUl9BTU9VTlQgPSBcIkVudGVyIGFuIGFtb3VudFwiO1xuICBjb25zdCBDT05ORUNUX1dBTExFVCA9XCJDb25uZWN0IHdhbGxldFwiO1xuICBjb25zdCBTV0FQID1cIlN3YXBcIjtcblxuICBjb25zdCBzcmNUb2tlbk9iaiA9IHtcbiAgICBpZDogXCJzcmNUb2tlblwiLFxuICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxuICAgIHNldFZhbHVlOiBzZXRJbnB1dFZhbHVlLFxuICAgIGRlZmF1bHRWYWx1ZTogc3JjVG9rZW4sXG4gICAgaWdub3JlVmFsdWU6IGRlc3RUb2tlbixcbiAgICBzZXRUb2tlbjogc2V0U3JjVG9rZW4sXG4gIH07XG5cbiAgY29uc3QgZGVzdFRva2VuT2JqID0ge1xuICAgIGlkOiBcImRlc3RUb2tlblwiLFxuICAgIHZhbHVlOiBvdXRwdXRWYWx1ZSxcbiAgICBzZXRWYWx1ZTogc2V0T3V0cHV0VmFsdWUsXG4gICAgZGVmYXVsdFZhbHVlOiBkZXN0VG9rZW4sXG4gICAgaWdub3JlVmFsdWU6IHNyY1Rva2VuLFxuICAgIHNldFRva2VuOiBzZXREZXN0VG9rZW4sXG4gIH07XG5cbiAgY29uc3QgW3NyY1Rva2VuQ29tcCwgc2V0U3JjVG9rZW5Db21wXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtkZXN0VG9rZW5Db21wLCBzZXREZXN0VG9rZW5Db21wXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgW3N3YXBCdG5UZXh0LCBzZXRTd2FwQnRuVGV4dF0gPSB1c2VTdGF0ZShFTlRFUl9BTU9VTlQpO1xuICBjb25zdCBbdHhQZW5kaW5nLCBzZXRUeFBlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG5vdGlmeUVycm9yID0gKG1zZykgPT4gdG9hc3QuZXJyb3IobXNnLCB7ZHVyYXRpb246IDYwMCB9KTtcbiAgY29uc3Qgbm90aWZ5U3VjY2VzcyA9ICgpID0+IHRvYXN0LnN1Y2Nlc3MoXCJUcmFuc2FjdGlvbiBjb21wbGV0ZWQuXCIpO1xuXG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy90ZXh0IGZvciBzdWJtaXQgYnV0dG9uXG5cbiAgICBpZiAoIWFkZHJlc3MpIHNldFN3YXBCdG5UZXh0KENPTk5FQ1RfV0FMTEVUKTtcbiAgICBlbHNlIGlmICghaW5wdXRWYWx1ZSB8fCAhb3V0cHV0VmFsdWUpIHNldFN3YXBCdG5UZXh0KEVOVEVSX0FNT1VOVCk7XG4gICAgZWxzZSBzZXRTd2FwQnRuVGV4dChTV0FQKVxuICB9LCBbaW5wdXRWYWx1ZSwgb3V0cHV0VmFsdWUsIGFkZHJlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gb3V0cHV0VmFsdWVSZWYuY3VycmVudCAmJlxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5hcmlhTGFiZWwgIT09IFwic3JjVG9rZW5cIiAmJlxuICAgICAgIWlzUmV2ZXJzZWQuY3VycmVudFxuICAgIClcbiAgICBwb3B1bGF0ZU91dHB1dFZhbHVlKGlucHV0VmFsdWUpO1xuXG4gICAgc2V0U3JjVG9rZW5Db21wKDxTd2FwRmllbGQgb2JqPXtzcmNUb2tlbk9ian0gcmVmPXtpbnB1dFZhbHVlUmVmfSAvPik7XG5cbiAgICBpZiAoaW5wdXRWYWx1ZT8ubGVuZ3RoID09PSAwKSBzZXRPdXRwdXRWYWx1ZShcIlwiKTtcbiAgfSwgW2lucHV0VmFsdWUsIGRlc3RUb2tlbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPSBpbnB1dFZhbHVlUmVmLmN1cnJlbnQgJiZcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYXJpYUxhYmVsICE9PSBcImRlc3RUb2tlblwiICYmXG4gICAgICAhaXNSZXZlcnNlZC5jdXJyZW50XG4gICAgKVxuICAgIHBvcHVsYXRlSW5wdXRWYWx1ZShvdXRwdXRWYWx1ZSk7XG5cbiAgICBzZXREZXN0VG9rZW5Db21wKDxTd2FwRmllbGQgb2JqPXtkZXN0VG9rZW5PYmp9IHJlZj17b3V0cHV0VmFsdWVSZWZ9IC8+KTtcblxuICAgIGlmIChvdXRwdXRWYWx1ZT8ubGVuZ3RoID09PSAwKSBzZXRJbnB1dFZhbHVlKFwiXCIpO1xuXG4gICAgLy9yZXNldHRpbmcgdGhlIGlzcmV2IHZhbHVlIGlmIGl0cyBzZXRcbiAgICBpZiAoaXNSZXZlcnNlZC5jdXJyZW50KSBpc1JldmVyc2VkLmN1cnJlbnQgPSBmYWxzZTtcbiAgfSwgW291dHB1dFZhbHVlLCBzcmNUb2tlbl0pO1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1bMXB4XSByb3VuZGVkLWwgYm9yZGVyLVsjNzc2NUYzXSBiZy1bIzc3NjVGM10gdy1bMTAwJV0gcC00XG4gICAgcHgtNiByb3VuZGVkLXhsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS00IHB4LTFcIj5cbiAgICAgICAgPHA+U3dhcDwvcD5cbiAgICAgICAgPENvZ0ljb24gY2xhc3NOYW1lPVwiaC02XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1bIzIxMjQyOV0gcC00IHB5LTYgcm91bmRlZC14bCBtYi0yIGJvcmRlci1bMnB4XVxuICAgICAgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci16aW5jLTYwMFwiPlxuICAgICAgICB7c3JjVG9rZW5Db21wfVxuXG4gICAgICAgIDxBcnJvd1NtRG93bkljb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIC1idXR0b20tNiBoLTEwIHAtMSBiZy1bIzIxMjQyOV1cbiAgICAgICAgICBib3JkZXItNCBib3JkZXItemluYy05MDAgdGV4dC16aW5jLTMwMCByb3VuZGVkLXhsIGN1cnNvci1wb2ludGVyXG4gICAgICAgICAgaG92ZXI6c2NhbGUtMTEwXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXZlcnNlRXhjaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzIxMjQyOV0gcC00IHB5LTYgcm91bmRlZC14bCBtdC0yIGJvcmRlci1bMnB4XVxuICAgICAgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci16aW5jLTYwMFwiPlxuICAgICAgICB7ZGVzdFRva2VuQ29tcH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Z2V0U3dhcEJ0bkNsYXNzTmFtZSgpfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKHN3YXBCdG5UZXh0ID09PSBJTkNSRUFTRV9BTExPV0FOQ0UpIGhhbmRsZUluY3JlYXNlQWxsb3dhbmNlKCk7XG4gICAgICAgICAgZWxzZSBpZiAoc3dhcEJ0blRleHQgPT09IFNXQVApIGhhbmRsZVN3YXAoKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3N3YXBCdG5UZXh0fVxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHt0eFBlbmRpbmcgJiYgPFRyYW5zYWN0aW9uU3RhdHVzIC8+fVxuXG4gICAgICA8VG9hc3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN3YXAoKSB7XG4gICAgaWYgKHNyY1Rva2VuID09PSBFVEggJiYgZGVzdFRva2VuICE9PSBFVEgpIHtcbiAgICAgIHBlcmZvcm1Td2FwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFR4UGVuZGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGhhc1ZhbGlkQWxsb3dhbmNlKGFkZHJlc3MsIHNyY1Rva2VuLCBpbnB1dFZhbHVlKTtcbiAgICAgIHNldFR4UGVuZGluZyhmYWxzZSk7XG5cbiAgICAgIGlmIChyZXN1bHQpIHBlcmZvcm1Td2FwKCk7XG4gICAgICBlbHNlIGhhbmRsZUluc3VmZmljaWVudEFsbG93YW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUluY3JlYXNlQWxsb3dhbmNlKCkge1xuICAgIHNldFR4UGVuZGluZyh0cnVlKTtcbiAgICBhd2FpdCBpbmNyZWFzZUFsbG93YW5jZShzcmNUb2tlbiwgaW5wdXRWYWx1ZSk7XG4gICAgc2V0VHhQZW5kaW5nKGZhbHNlKTtcblxuICAgIHNldFN3YXBCdG5UZXh0KFNXQVApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmV2ZXJzZUV4Y2hhbmdlKGUpIHtcbiAgICBpc1JldmVyc2VkLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgc2V0SW5wdXRWYWx1ZShvdXRwdXRWYWx1ZSk7XG4gICAgc2V0T3V0cHV0VmFsdWUoaW5wdXRWYWx1ZSk7XG5cbiAgICBzZXRTcmNUb2tlbihkZXN0VG9rZW4pO1xuICAgIHNldERlc3RUb2tlbihzcmNUb2tlbik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTd2FwQnRuQ2xhc3NOYW1lKCkge1xuICAgIGxldCBjbGFzc05hbWUgPSBcInAtNCB3LWZ1bGwgbXktMiByb3VuZGVkLXhsXCI7XG4gICAgY2xhc3NOYW1lICs9IFxuICAgIHN3YXBCdG5UZXh0ID09PSBFTlRFUl9BTU9VTlQgfHwgc3dhcEJ0blRleHQgPT09IENPTk5FQ1RfV0FMTEVUXG4gICAgPyBcInRleHQtemluYy00MDAgYmctemluYy04MDAgcG9pbnRlci1ldmVudHMtbm9uZVwiXG4gICAgOiBcImJnLWJsdWUtNzAwXCI7XG4gICAgY2xhc3NOYW1lICs9IHN3YXBCdG5UZXh0ID09PSBJTkNSRUFTRV9BTExPV0FOQ0UgPyBcImJnLXllbGxvdy02MDBcIiA6IFwiXCI7XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcHVsYXRlT3V0cHV0VmFsdWUoKSB7XG4gICAgaWYgKFxuICAgICAgZGVzdFRva2VuID09PSBERUZBVUxUX1ZBTFVFIHx8XG4gICAgICBzcmNUb2tlbiA9PT0gREVGQVVMVF9WQUxVRSB8fFxuICAgICAgIWlucHV0VmFsdWVcbiAgICApXG4gICAgICByZXR1cm47XG5cbiAgICB0clxuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFN3YXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImhhc1ZhbGlkQWxsb3dhbmNlIiwiaW5jcmVhc2VBbGxvd2FuY2UiLCJzd2FwRXRoVG9Ub2tlbiIsInN3YXBUb2tlblRvRXRoIiwic3dhcFRva2VuVG9Ub2tlbiIsIkNvZ0ljb24iLCJBcnJvd1NtRG93bkljb24iLCJTd2FwRmllbGQiLCJUcmFuc2FjdGlvblN0YXR1cyIsInRvYXN0IiwiVG9hc3RlciIsIkRFRkFVTFRfVkFMVUUiLCJFVEgiLCJ0b0V0aCIsInRvV2VpIiwidXNlQWNjb3VudCIsInBvcHVsYXRlIiwiU3dhcENvbXBvbmVudCIsImhhbmRsZVJldmVyc2VFeGNoYW5nZSIsImUiLCJpc1JldmVyc2VkIiwiY3VycmVudCIsInNldElucHV0VmFsdWUiLCJvdXRwdXRWYWx1ZSIsInNldE91dHB1dFZhbHVlIiwiaW5wdXRWYWx1ZSIsInNldFNyY1Rva2VuIiwiZGVzdFRva2VuIiwic2V0RGVzdFRva2VuIiwic3JjVG9rZW4iLCJnZXRTd2FwQnRuQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwic3dhcEJ0blRleHQiLCJFTlRFUl9BTU9VTlQiLCJDT05ORUNUX1dBTExFVCIsIklOQ1JFQVNFX0FMTE9XQU5DRSIsInBvcHVsYXRlT3V0cHV0VmFsdWUiLCJ0ciIsImlucHV0VmFsdWVSZWYiLCJvdXRwdXRWYWx1ZVJlZiIsIlNXQVAiLCJzcmNUb2tlbk9iaiIsImlkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsImlnbm9yZVZhbHVlIiwic2V0VG9rZW4iLCJkZXN0VG9rZW5PYmoiLCJzcmNUb2tlbkNvbXAiLCJzZXRTcmNUb2tlbkNvbXAiLCJkZXN0VG9rZW5Db21wIiwic2V0RGVzdFRva2VuQ29tcCIsInNldFN3YXBCdG5UZXh0IiwidHhQZW5kaW5nIiwic2V0VHhQZW5kaW5nIiwibm90aWZ5RXJyb3IiLCJtc2ciLCJlcnJvciIsImR1cmF0aW9uIiwibm90aWZ5U3VjY2VzcyIsInN1Y2Nlc3MiLCJhZGRyZXNzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYXJpYUxhYmVsIiwib2JqIiwicmVmIiwibGVuZ3RoIiwicG9wdWxhdGVJbnB1dFZhbHVlIiwiZGl2IiwicCIsIm9uQ2xpY2siLCJidXR0b24iLCJoYW5kbGVJbmNyZWFzZUFsbG93YW5jZSIsImhhbmRsZVN3YXAiLCJyZXN1bHQiLCJwZXJmb3JtU3dhcCIsImhhbmRsZUluc3VmZmljaWVudEFsbG93YW5jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});