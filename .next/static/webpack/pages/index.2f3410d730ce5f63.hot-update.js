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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase allowance\";\n    var ENTER_AMOUNT = \"Enter an amount\";\n    var CONNECT_WALLET = \"Connect wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(msg, {\n            duration: 600\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Transaction completed.\");\n    };\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_10__.useAccount)().address;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        //text for submit button\n        if (!address) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, [\n        inputValue,\n        outputValue,\n        address\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (document.activeElement != outputValueRef.current && document.activeElement.ariaLabel !== \"srcToken\" && !isReversed.current) populateOutputValue(inputValue);\n        setSrcTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            obj: srcTokenObj,\n            ref: inputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n            lineNumber: 81,\n            columnNumber: 21\n        }, _this));\n        if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) setOutputValue(\"\");\n    }, [\n        inputValue,\n        destToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (document.activeElement != inputValueRef.current && document.activeElement.ariaLabel !== \"destToken\" && !isReversed.current) populateInputValue(outputValue);\n        setDestTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            obj: destTokenObj,\n            ref: outputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n            lineNumber: 94,\n            columnNumber: 22\n        }, _this));\n        if ((outputValue === null || outputValue === void 0 ? void 0 : outputValue.length) === 0) setInputValue(\"\");\n        //resetting the isrev value if its set\n        if (isReversed.current) isReversed.current = false;\n    }, [\n        outputValue,\n        srcToken\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"border-[1px] rounded-l border-[#7765F3] bg-[#7765F3] w-[100%] p-4 px-6 rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between py-4 px-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"Swap\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.CogIcon, {\n                        className: \"h-6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: [\n                    srcTokenComp,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__.ArrowSmDownIcon, {\n                        className: \"absolute left-1/2 -translate-x-1/2 -buttom-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110\",\n                        onClick: handleReverseExchange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: destTokenComp\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: getSwapBtnClassName(),\n                onClick: function() {\n                    if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();\n                    else if (swapBtnText === SWAP) handleSwap();\n                },\n                children: swapBtnText\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, _this),\n            txPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TransactionStatus__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 136,\n                columnNumber: 21\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, _this);\n    function handleSwap() {\n        return _handleSwap.apply(this, arguments);\n    }\n    function _handleSwap() {\n        _handleSwap = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return C_Users_HP_Desktop_Acom_market_main_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.ETH)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        {\n                            PerformSwap();\n                        }\n                        _ctx.next = 9;\n                        break;\n                    case 4:\n                        setTxPending(true);\n                        _ctx.next = 7;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_3__.hasValidAllowance)(address, srcToken, inputValue);\n                    case 7:\n                        result = _ctx.sent;\n                        set;\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSwap.apply(this, arguments);\n    }\n};\n_s(SwapComponent, \"1082vP4cCXDbY0OEFTby5eDS7IM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_10__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRXlDLFVBQVUsRUFBRSxDQUFDO2lCQUM3QzswQkFFQTVCLFdBQVc7Ozs7O3FCQUNMO1lBRVJFLFNBQVMsa0JBQUksOERBQUN2QywwREFBaUI7Ozs7cUJBQUc7MEJBRW5DLDhEQUFDRSxvREFBTzs7OztxQkFBRzs7Ozs7O2FBQ1AsQ0FDTjthQUVhK0QsVUFBVTtlQUFWQSxXQUFVOzthQUFWQSxXQUFVO1FBQVZBLFdBQVUsR0FBekIsdVBBQTRCO2dCQUtsQkMsTUFBTTs7Ozs0QkFKVnhELENBQUFBLENBQUFBLFFBQVEsS0FBS04saURBQUcsSUFBSVEsU0FBUyxLQUFLUixpREFBRzs7Ozt3QkFBRTs0QkFDekMrRCxXQUFXLEVBQUUsQ0FBQzt5QkFDZjs7Ozt3QkFDQzNCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7K0JBQ0VoRCxpRUFBaUIsQ0FBQ3VELE9BQU8sRUFBRXJDLFFBQVEsRUFBRUksVUFBVSxDQUFDOzt3QkFBL0RvRCxNQUFNLFlBQXlEO3dCQUNyRUUsR0FBRzs7Ozs7O1NBRU47ZUFSY0gsV0FBVTs7Q0FTMUI7R0FwSUt4RCxhQUFhOztRQTRDR0YsOENBQVU7OztBQTVDMUJFLEtBQUFBLGFBQWE7QUFzSW5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Td2FwQ29tcG9uZW50LmpzPzkyZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgaGFzVmFsaWRBbGxvd2FuY2UsXG4gIGluY3JlYXNlQWxsb3dhbmNlLFxuICBzd2FwRXRoVG9Ub2tlbixcbiAgc3dhcFRva2VuVG9FdGgsXG4gIHN3YXBUb2tlblRvVG9rZW4sXG59IGZyb20gXCIuLi91dGlscy9jb250ZXh0XCI7XG5cbmltcG9ydCB7IENvZ0ljb24sIEFycm93U21Eb3duSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCBTd2FwRmllbGQgZnJvbSBcIi4vU3dhcEZpZWxkXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25TdGF0dXMgZnJvbSBcIi4vVHJhbnNhY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHsgREVGQVVMVF9WQUxVRSwgRVRIIH0gZnJvbSBcIi4uL3V0aWxzL3NhbGVUb2tlblwiO1xuaW1wb3J0IHsgdG9FdGgsIHRvV2VpIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZSB9IGZyb20gXCJkb3RlbnZcIjtcblxuY29uc3QgU3dhcENvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW3NyY1Rva2VuLCBzZXRTcmNUb2tlbl0gPSB1c2VTdGF0ZShFVEgpO1xuICBjb25zdCBbZGVzdFRva2VuLCBzZXREZXN0VG9rZW5dID0gIHVzZVN0YXRlKERFRkFVTFRfVkFMVUUpO1xuXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtvdXRwdXRWYWx1ZSwgc2V0T3V0cHV0VmFsdWVdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBpbnB1dFZhbHVlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IG91dHB1dFZhbHVlUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgaXNSZXZlcnNlZCA9IHVzZVJlZihmYWxzZSk7XG5cbiAgY29uc3QgSU5DUkVBU0VfQUxMT1dBTkNFID0gXCJJbmNyZWFzZSBhbGxvd2FuY2VcIjtcbiAgY29uc3QgRU5URVJfQU1PVU5UID0gXCJFbnRlciBhbiBhbW91bnRcIjtcbiAgY29uc3QgQ09OTkVDVF9XQUxMRVQgPVwiQ29ubmVjdCB3YWxsZXRcIjtcbiAgY29uc3QgU1dBUCA9XCJTd2FwXCI7XG5cbiAgY29uc3Qgc3JjVG9rZW5PYmogPSB7XG4gICAgaWQ6IFwic3JjVG9rZW5cIixcbiAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcbiAgICBzZXRWYWx1ZTogc2V0SW5wdXRWYWx1ZSxcbiAgICBkZWZhdWx0VmFsdWU6IHNyY1Rva2VuLFxuICAgIGlnbm9yZVZhbHVlOiBkZXN0VG9rZW4sXG4gICAgc2V0VG9rZW46IHNldFNyY1Rva2VuLFxuICB9O1xuXG4gIGNvbnN0IGRlc3RUb2tlbk9iaiA9IHtcbiAgICBpZDogXCJkZXN0VG9rZW5cIixcbiAgICB2YWx1ZTogb3V0cHV0VmFsdWUsXG4gICAgc2V0VmFsdWU6IHNldE91dHB1dFZhbHVlLFxuICAgIGRlZmF1bHRWYWx1ZTogZGVzdFRva2VuLFxuICAgIGlnbm9yZVZhbHVlOiBzcmNUb2tlbixcbiAgICBzZXRUb2tlbjogc2V0RGVzdFRva2VuLFxuICB9O1xuXG4gIGNvbnN0IFtzcmNUb2tlbkNvbXAsIHNldFNyY1Rva2VuQ29tcF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGVzdFRva2VuQ29tcCwgc2V0RGVzdFRva2VuQ29tcF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IFtzd2FwQnRuVGV4dCwgc2V0U3dhcEJ0blRleHRdID0gdXNlU3RhdGUoRU5URVJfQU1PVU5UKTtcbiAgY29uc3QgW3R4UGVuZGluZywgc2V0VHhQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBub3RpZnlFcnJvciA9IChtc2cpID0+IHRvYXN0LmVycm9yKG1zZywge2R1cmF0aW9uOiA2MDAgfSk7XG4gIGNvbnN0IG5vdGlmeVN1Y2Nlc3MgPSAoKSA9PiB0b2FzdC5zdWNjZXNzKFwiVHJhbnNhY3Rpb24gY29tcGxldGVkLlwiKTtcblxuICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vdGV4dCBmb3Igc3VibWl0IGJ1dHRvblxuXG4gICAgaWYgKCFhZGRyZXNzKSBzZXRTd2FwQnRuVGV4dChDT05ORUNUX1dBTExFVCk7XG4gICAgZWxzZSBpZiAoIWlucHV0VmFsdWUgfHwgIW91dHB1dFZhbHVlKSBzZXRTd2FwQnRuVGV4dChFTlRFUl9BTU9VTlQpO1xuICAgIGVsc2Ugc2V0U3dhcEJ0blRleHQoU1dBUClcbiAgfSwgW2lucHV0VmFsdWUsIG91dHB1dFZhbHVlLCBhZGRyZXNzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9IG91dHB1dFZhbHVlUmVmLmN1cnJlbnQgJiZcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYXJpYUxhYmVsICE9PSBcInNyY1Rva2VuXCIgJiZcbiAgICAgICFpc1JldmVyc2VkLmN1cnJlbnRcbiAgICApXG4gICAgcG9wdWxhdGVPdXRwdXRWYWx1ZShpbnB1dFZhbHVlKTtcblxuICAgIHNldFNyY1Rva2VuQ29tcCg8U3dhcEZpZWxkIG9iaj17c3JjVG9rZW5PYmp9IHJlZj17aW5wdXRWYWx1ZVJlZn0gLz4pO1xuXG4gICAgaWYgKGlucHV0VmFsdWU/Lmxlbmd0aCA9PT0gMCkgc2V0T3V0cHV0VmFsdWUoXCJcIik7XG4gIH0sIFtpbnB1dFZhbHVlLCBkZXN0VG9rZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gaW5wdXRWYWx1ZVJlZi5jdXJyZW50ICYmXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmFyaWFMYWJlbCAhPT0gXCJkZXN0VG9rZW5cIiAmJlxuICAgICAgIWlzUmV2ZXJzZWQuY3VycmVudFxuICAgIClcbiAgICBwb3B1bGF0ZUlucHV0VmFsdWUob3V0cHV0VmFsdWUpO1xuXG4gICAgc2V0RGVzdFRva2VuQ29tcCg8U3dhcEZpZWxkIG9iaj17ZGVzdFRva2VuT2JqfSByZWY9e291dHB1dFZhbHVlUmVmfSAvPik7XG5cbiAgICBpZiAob3V0cHV0VmFsdWU/Lmxlbmd0aCA9PT0gMCkgc2V0SW5wdXRWYWx1ZShcIlwiKTtcblxuICAgIC8vcmVzZXR0aW5nIHRoZSBpc3JldiB2YWx1ZSBpZiBpdHMgc2V0XG4gICAgaWYgKGlzUmV2ZXJzZWQuY3VycmVudCkgaXNSZXZlcnNlZC5jdXJyZW50ID0gZmFsc2U7XG4gIH0sIFtvdXRwdXRWYWx1ZSwgc3JjVG9rZW5dKTtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItWzFweF0gcm91bmRlZC1sIGJvcmRlci1bIzc3NjVGM10gYmctWyM3NzY1RjNdIHctWzEwMCVdIHAtNFxuICAgIHB4LTYgcm91bmRlZC14bFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktNCBweC0xXCI+XG4gICAgICAgIDxwPlN3YXA8L3A+XG4gICAgICAgIDxDb2dJY29uIGNsYXNzTmFtZT1cImgtNlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctWyMyMTI0MjldIHAtNCBweS02IHJvdW5kZWQteGwgbWItMiBib3JkZXItWzJweF1cbiAgICAgIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItemluYy02MDBcIj5cbiAgICAgICAge3NyY1Rva2VuQ29tcH1cblxuICAgICAgICA8QXJyb3dTbURvd25JY29uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiAtYnV0dG9tLTYgaC0xMCBwLTEgYmctWyMyMTI0MjldXG4gICAgICAgICAgYm9yZGVyLTQgYm9yZGVyLXppbmMtOTAwIHRleHQtemluYy0zMDAgcm91bmRlZC14bCBjdXJzb3ItcG9pbnRlclxuICAgICAgICAgIGhvdmVyOnNjYWxlLTExMFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUmV2ZXJzZUV4Y2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMyMTI0MjldIHAtNCBweS02IHJvdW5kZWQteGwgbXQtMiBib3JkZXItWzJweF1cbiAgICAgIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItemluYy02MDBcIj5cbiAgICAgICAge2Rlc3RUb2tlbkNvbXB9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2dldFN3YXBCdG5DbGFzc05hbWUoKX1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmIChzd2FwQnRuVGV4dCA9PT0gSU5DUkVBU0VfQUxMT1dBTkNFKSBoYW5kbGVJbmNyZWFzZUFsbG93YW5jZSgpO1xuICAgICAgICAgIGVsc2UgaWYgKHN3YXBCdG5UZXh0ID09PSBTV0FQKSBoYW5kbGVTd2FwKCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtzd2FwQnRuVGV4dH1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7dHhQZW5kaW5nICYmIDxUcmFuc2FjdGlvblN0YXR1cyAvPn1cblxuICAgICAgPFRvYXN0ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTd2FwKCkge1xuICAgIGlmIChzcmNUb2tlbiA9PT0gRVRIICYmIGRlc3RUb2tlbiAhPT0gRVRIKSB7XG4gICAgICBQZXJmb3JtU3dhcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUeFBlbmRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBoYXNWYWxpZEFsbG93YW5jZShhZGRyZXNzLCBzcmNUb2tlbiwgaW5wdXRWYWx1ZSk7XG4gICAgICBzZXRcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN3YXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImhhc1ZhbGlkQWxsb3dhbmNlIiwiaW5jcmVhc2VBbGxvd2FuY2UiLCJzd2FwRXRoVG9Ub2tlbiIsInN3YXBUb2tlblRvRXRoIiwic3dhcFRva2VuVG9Ub2tlbiIsIkNvZ0ljb24iLCJBcnJvd1NtRG93bkljb24iLCJTd2FwRmllbGQiLCJUcmFuc2FjdGlvblN0YXR1cyIsInRvYXN0IiwiVG9hc3RlciIsIkRFRkFVTFRfVkFMVUUiLCJFVEgiLCJ0b0V0aCIsInRvV2VpIiwidXNlQWNjb3VudCIsInBvcHVsYXRlIiwiU3dhcENvbXBvbmVudCIsInNyY1Rva2VuIiwic2V0U3JjVG9rZW4iLCJkZXN0VG9rZW4iLCJzZXREZXN0VG9rZW4iLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIm91dHB1dFZhbHVlIiwic2V0T3V0cHV0VmFsdWUiLCJpbnB1dFZhbHVlUmVmIiwib3V0cHV0VmFsdWVSZWYiLCJpc1JldmVyc2VkIiwiSU5DUkVBU0VfQUxMT1dBTkNFIiwiRU5URVJfQU1PVU5UIiwiQ09OTkVDVF9XQUxMRVQiLCJTV0FQIiwic3JjVG9rZW5PYmoiLCJpZCIsInZhbHVlIiwic2V0VmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJpZ25vcmVWYWx1ZSIsInNldFRva2VuIiwiZGVzdFRva2VuT2JqIiwic3JjVG9rZW5Db21wIiwic2V0U3JjVG9rZW5Db21wIiwiZGVzdFRva2VuQ29tcCIsInNldERlc3RUb2tlbkNvbXAiLCJzd2FwQnRuVGV4dCIsInNldFN3YXBCdG5UZXh0IiwidHhQZW5kaW5nIiwic2V0VHhQZW5kaW5nIiwibm90aWZ5RXJyb3IiLCJtc2ciLCJlcnJvciIsImR1cmF0aW9uIiwibm90aWZ5U3VjY2VzcyIsInN1Y2Nlc3MiLCJhZGRyZXNzIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiY3VycmVudCIsImFyaWFMYWJlbCIsInBvcHVsYXRlT3V0cHV0VmFsdWUiLCJvYmoiLCJyZWYiLCJsZW5ndGgiLCJwb3B1bGF0ZUlucHV0VmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwib25DbGljayIsImhhbmRsZVJldmVyc2VFeGNoYW5nZSIsImJ1dHRvbiIsImdldFN3YXBCdG5DbGFzc05hbWUiLCJoYW5kbGVJbmNyZWFzZUFsbG93YW5jZSIsImhhbmRsZVN3YXAiLCJyZXN1bHQiLCJQZXJmb3JtU3dhcCIsInNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});