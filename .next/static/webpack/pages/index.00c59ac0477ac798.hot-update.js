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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_8__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_6__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase allowance\";\n    var ENTER_AMOUNT = \"Enter an amount\";\n    var CONNECT_WALLET = \"Connect wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(msg, {\n            duration: 600\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(\"Transaction completed.\");\n    };\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount)().address;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //text for submit button\n        if (!address) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, [\n        inputValue,\n        outputValue,\n        address\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (document.activeElement != outputValueRef.current && document.activeElement.ariaLabel !== \"srcToken\" && !isReversed.current) populateOutputValue(inputValue);\n        setSrcTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            obj: srcTokenObj,\n            ref: inputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n            lineNumber: 81,\n            columnNumber: 21\n        }, _this));\n        if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) setOutputValue(\"\");\n    }, [\n        inputValue,\n        destToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (document.activeElement != inputValueRef.current && document.activeElement.ariaLabel !== \"destToken\" && !isReversed.current) populateInputValue(outputValue);\n        setDestTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            obj: destTokenObj,\n            ref: outputValueRef\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n            lineNumber: 94,\n            columnNumber: 22\n        }, _this));\n        if ((outputValue === null || outputValue === void 0 ? void 0 : outputValue.length) === 0) setInputValue(\"\");\n        //resetting the isrev value if its set\n        if (isReversed.current) isReversed.current = false;\n    }, [\n        outputValue,\n        srcToken\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-[1px] rounded-l border-[#7765F3] bg-[#7765F3] w-[100%] p-4 px-6 rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between py-4 px-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Swap\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__.CogIcon, {\n                        className: \"h-6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: [\n                    srcTokenComp,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__.ArrowSmDownIcon, {\n                        className: \"absolute left-1/2 -translate-x-1/2 -buttom-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110\",\n                        onClick: handleReverseExchange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:bor\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\SwapComponent.js\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, _this);\n};\n_s(SwapComponent, \"1082vP4cCXDbY0OEFTby5eDS7IM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTO1lBQUNzRCxHQUFHLEVBQUVyQixZQUFZO1lBQUVzQixHQUFHLEVBQUVuQyxjQUFjOzs7OztpQkFBSSxDQUFDLENBQUM7UUFFeEUsSUFBSUgsQ0FBQUEsV0FBVyxhQUFYQSxXQUFXLFdBQVEsR0FBbkJBLEtBQUFBLENBQW1CLEdBQW5CQSxXQUFXLENBQUV1QyxNQUFNLE1BQUssQ0FBQyxFQUFFeEMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWpELHNDQUFzQztRQUN0QyxJQUFJSyxVQUFVLENBQUM4QixPQUFPLEVBQUU5QixVQUFVLENBQUM4QixPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3BELEVBQUU7UUFBQ2xDLFdBQVc7UUFBRU4sUUFBUTtLQUFDLENBQUMsQ0FBQztJQUU1QixxQkFDRSw4REFBQytDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG1GQUNDOzswQkFDZCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDZDQUE2Qzs7a0NBQzFELDhEQUFDQyxHQUFDO2tDQUFDLE1BQUk7Ozs7OzZCQUFJO2tDQUNYLDhEQUFDOUQsOERBQU87d0JBQUM2RCxTQUFTLEVBQUMsS0FBSzs7Ozs7NkJBQUc7Ozs7OztxQkFDdkI7MEJBQ04sOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxzR0FDMEI7O29CQUN0Q3pCLFlBQVk7a0NBRWIsOERBQUNuQyxzRUFBZTt3QkFDZDRELFNBQVMsRUFBQyxxSkFFTTt3QkFDaEJFLE9BQU8sRUFBRUMscUJBQXFCOzs7Ozs2QkFDOUI7Ozs7OztxQkFDRTswQkFFTiw4REFBQ0osS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGlGQUNjOzs7OztxQkFFdkI7Ozs7OzthQUNGLENBQ1A7Q0FDRjtHQTVHS2pELGFBQWE7O1FBNENHRiw2Q0FBVTs7O0FBNUMxQkUsS0FBQUEsYUFBYTtBQThHbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N3YXBDb21wb25lbnQuanM/OTJlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBoYXNWYWxpZEFsbG93YW5jZSxcbiAgaW5jcmVhc2VBbGxvd2FuY2UsXG4gIHN3YXBFdGhUb1Rva2VuLFxuICBzd2FwVG9rZW5Ub0V0aCxcbiAgc3dhcFRva2VuVG9Ub2tlbixcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgQ29nSWNvbiwgQXJyb3dTbURvd25JY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0IFN3YXBGaWVsZCBmcm9tIFwiLi9Td2FwRmllbGRcIjtcbmltcG9ydCBUcmFuc2FjdGlvblN0YXR1cyBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyBERUZBVUxUX1ZBTFVFLCBFVEggfSBmcm9tIFwiLi4vdXRpbHMvc2FsZVRva2VuXCI7XG5pbXBvcnQgeyB0b0V0aCwgdG9XZWkgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IHVzZUFjY291bnQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IHBvcHVsYXRlIH0gZnJvbSBcImRvdGVudlwiO1xuXG5jb25zdCBTd2FwQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbc3JjVG9rZW4sIHNldFNyY1Rva2VuXSA9IHVzZVN0YXRlKEVUSCk7XG4gIGNvbnN0IFtkZXN0VG9rZW4sIHNldERlc3RUb2tlbl0gPSAgdXNlU3RhdGUoREVGQVVMVF9WQUxVRSk7XG5cbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW291dHB1dFZhbHVlLCBzZXRPdXRwdXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGlucHV0VmFsdWVSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgb3V0cHV0VmFsdWVSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBpc1JldmVyc2VkID0gdXNlUmVmKGZhbHNlKTtcblxuICBjb25zdCBJTkNSRUFTRV9BTExPV0FOQ0UgPSBcIkluY3JlYXNlIGFsbG93YW5jZVwiO1xuICBjb25zdCBFTlRFUl9BTU9VTlQgPSBcIkVudGVyIGFuIGFtb3VudFwiO1xuICBjb25zdCBDT05ORUNUX1dBTExFVCA9XCJDb25uZWN0IHdhbGxldFwiO1xuICBjb25zdCBTV0FQID1cIlN3YXBcIjtcblxuICBjb25zdCBzcmNUb2tlbk9iaiA9IHtcbiAgICBpZDogXCJzcmNUb2tlblwiLFxuICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxuICAgIHNldFZhbHVlOiBzZXRJbnB1dFZhbHVlLFxuICAgIGRlZmF1bHRWYWx1ZTogc3JjVG9rZW4sXG4gICAgaWdub3JlVmFsdWU6IGRlc3RUb2tlbixcbiAgICBzZXRUb2tlbjogc2V0U3JjVG9rZW4sXG4gIH07XG5cbiAgY29uc3QgZGVzdFRva2VuT2JqID0ge1xuICAgIGlkOiBcImRlc3RUb2tlblwiLFxuICAgIHZhbHVlOiBvdXRwdXRWYWx1ZSxcbiAgICBzZXRWYWx1ZTogc2V0T3V0cHV0VmFsdWUsXG4gICAgZGVmYXVsdFZhbHVlOiBkZXN0VG9rZW4sXG4gICAgaWdub3JlVmFsdWU6IHNyY1Rva2VuLFxuICAgIHNldFRva2VuOiBzZXREZXN0VG9rZW4sXG4gIH07XG5cbiAgY29uc3QgW3NyY1Rva2VuQ29tcCwgc2V0U3JjVG9rZW5Db21wXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtkZXN0VG9rZW5Db21wLCBzZXREZXN0VG9rZW5Db21wXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgW3N3YXBCdG5UZXh0LCBzZXRTd2FwQnRuVGV4dF0gPSB1c2VTdGF0ZShFTlRFUl9BTU9VTlQpO1xuICBjb25zdCBbdHhQZW5kaW5nLCBzZXRUeFBlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG5vdGlmeUVycm9yID0gKG1zZykgPT4gdG9hc3QuZXJyb3IobXNnLCB7ZHVyYXRpb246IDYwMCB9KTtcbiAgY29uc3Qgbm90aWZ5U3VjY2VzcyA9ICgpID0+IHRvYXN0LnN1Y2Nlc3MoXCJUcmFuc2FjdGlvbiBjb21wbGV0ZWQuXCIpO1xuXG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy90ZXh0IGZvciBzdWJtaXQgYnV0dG9uXG5cbiAgICBpZiAoIWFkZHJlc3MpIHNldFN3YXBCdG5UZXh0KENPTk5FQ1RfV0FMTEVUKTtcbiAgICBlbHNlIGlmICghaW5wdXRWYWx1ZSB8fCAhb3V0cHV0VmFsdWUpIHNldFN3YXBCdG5UZXh0KEVOVEVSX0FNT1VOVCk7XG4gICAgZWxzZSBzZXRTd2FwQnRuVGV4dChTV0FQKVxuICB9LCBbaW5wdXRWYWx1ZSwgb3V0cHV0VmFsdWUsIGFkZHJlc3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gb3V0cHV0VmFsdWVSZWYuY3VycmVudCAmJlxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5hcmlhTGFiZWwgIT09IFwic3JjVG9rZW5cIiAmJlxuICAgICAgIWlzUmV2ZXJzZWQuY3VycmVudFxuICAgIClcbiAgICBwb3B1bGF0ZU91dHB1dFZhbHVlKGlucHV0VmFsdWUpO1xuXG4gICAgc2V0U3JjVG9rZW5Db21wKDxTd2FwRmllbGQgb2JqPXtzcmNUb2tlbk9ian0gcmVmPXtpbnB1dFZhbHVlUmVmfSAvPik7XG5cbiAgICBpZiAoaW5wdXRWYWx1ZT8ubGVuZ3RoID09PSAwKSBzZXRPdXRwdXRWYWx1ZShcIlwiKTtcbiAgfSwgW2lucHV0VmFsdWUsIGRlc3RUb2tlbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPSBpbnB1dFZhbHVlUmVmLmN1cnJlbnQgJiZcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYXJpYUxhYmVsICE9PSBcImRlc3RUb2tlblwiICYmXG4gICAgICAhaXNSZXZlcnNlZC5jdXJyZW50XG4gICAgKVxuICAgIHBvcHVsYXRlSW5wdXRWYWx1ZShvdXRwdXRWYWx1ZSk7XG5cbiAgICBzZXREZXN0VG9rZW5Db21wKDxTd2FwRmllbGQgb2JqPXtkZXN0VG9rZW5PYmp9IHJlZj17b3V0cHV0VmFsdWVSZWZ9IC8+KTtcblxuICAgIGlmIChvdXRwdXRWYWx1ZT8ubGVuZ3RoID09PSAwKSBzZXRJbnB1dFZhbHVlKFwiXCIpO1xuXG4gICAgLy9yZXNldHRpbmcgdGhlIGlzcmV2IHZhbHVlIGlmIGl0cyBzZXRcbiAgICBpZiAoaXNSZXZlcnNlZC5jdXJyZW50KSBpc1JldmVyc2VkLmN1cnJlbnQgPSBmYWxzZTtcbiAgfSwgW291dHB1dFZhbHVlLCBzcmNUb2tlbl0pO1xuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1bMXB4XSByb3VuZGVkLWwgYm9yZGVyLVsjNzc2NUYzXSBiZy1bIzc3NjVGM10gdy1bMTAwJV0gcC00XG4gICAgcHgtNiByb3VuZGVkLXhsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS00IHB4LTFcIj5cbiAgICAgICAgPHA+U3dhcDwvcD5cbiAgICAgICAgPENvZ0ljb24gY2xhc3NOYW1lPVwiaC02XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1bIzIxMjQyOV0gcC00IHB5LTYgcm91bmRlZC14bCBtYi0yIGJvcmRlci1bMnB4XVxuICAgICAgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci16aW5jLTYwMFwiPlxuICAgICAgICB7c3JjVG9rZW5Db21wfVxuXG4gICAgICAgIDxBcnJvd1NtRG93bkljb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIC1idXR0b20tNiBoLTEwIHAtMSBiZy1bIzIxMjQyOV1cbiAgICAgICAgICBib3JkZXItNCBib3JkZXItemluYy05MDAgdGV4dC16aW5jLTMwMCByb3VuZGVkLXhsIGN1cnNvci1wb2ludGVyXG4gICAgICAgICAgaG92ZXI6c2NhbGUtMTEwXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXZlcnNlRXhjaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzIxMjQyOV0gcC00IHB5LTYgcm91bmRlZC14bCBtdC0yIGJvcmRlci1bMnB4XVxuICAgICAgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvclwiPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3dhcENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiaGFzVmFsaWRBbGxvd2FuY2UiLCJpbmNyZWFzZUFsbG93YW5jZSIsInN3YXBFdGhUb1Rva2VuIiwic3dhcFRva2VuVG9FdGgiLCJzd2FwVG9rZW5Ub1Rva2VuIiwiQ29nSWNvbiIsIkFycm93U21Eb3duSWNvbiIsIlN3YXBGaWVsZCIsIlRyYW5zYWN0aW9uU3RhdHVzIiwidG9hc3QiLCJUb2FzdGVyIiwiREVGQVVMVF9WQUxVRSIsIkVUSCIsInRvRXRoIiwidG9XZWkiLCJ1c2VBY2NvdW50IiwicG9wdWxhdGUiLCJTd2FwQ29tcG9uZW50Iiwic3JjVG9rZW4iLCJzZXRTcmNUb2tlbiIsImRlc3RUb2tlbiIsInNldERlc3RUb2tlbiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwib3V0cHV0VmFsdWUiLCJzZXRPdXRwdXRWYWx1ZSIsImlucHV0VmFsdWVSZWYiLCJvdXRwdXRWYWx1ZVJlZiIsImlzUmV2ZXJzZWQiLCJJTkNSRUFTRV9BTExPV0FOQ0UiLCJFTlRFUl9BTU9VTlQiLCJDT05ORUNUX1dBTExFVCIsIlNXQVAiLCJzcmNUb2tlbk9iaiIsImlkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsImlnbm9yZVZhbHVlIiwic2V0VG9rZW4iLCJkZXN0VG9rZW5PYmoiLCJzcmNUb2tlbkNvbXAiLCJzZXRTcmNUb2tlbkNvbXAiLCJkZXN0VG9rZW5Db21wIiwic2V0RGVzdFRva2VuQ29tcCIsInN3YXBCdG5UZXh0Iiwic2V0U3dhcEJ0blRleHQiLCJ0eFBlbmRpbmciLCJzZXRUeFBlbmRpbmciLCJub3RpZnlFcnJvciIsIm1zZyIsImVycm9yIiwiZHVyYXRpb24iLCJub3RpZnlTdWNjZXNzIiwic3VjY2VzcyIsImFkZHJlc3MiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJjdXJyZW50IiwiYXJpYUxhYmVsIiwicG9wdWxhdGVPdXRwdXRWYWx1ZSIsIm9iaiIsInJlZiIsImxlbmd0aCIsInBvcHVsYXRlSW5wdXRWYWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJvbkNsaWNrIiwiaGFuZGxlUmV2ZXJzZUV4Y2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});