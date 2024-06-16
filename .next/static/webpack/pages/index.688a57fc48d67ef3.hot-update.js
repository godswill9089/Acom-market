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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_5__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase allowance\";\n    var ENTER_AMOUNT = \"Enter an amount\";\n    var CONNECT_WALLET = \"Connect wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(msg, {\n            duration: 600\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Transaction completed.\");\n    };\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useAccount)().address;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        //text for submit button\n        if (!address) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, []);\n};\n_s(SwapComponent, \"+VCOElKkvdLT1imYuhEXXqXXvRg=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_7__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3YXBDb21wb25lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyRDtBQU9qQztBQUUwQztBQUNoQztBQUNnQjtBQUNIO0FBQ087QUFDVjtBQUNYOztBQUVuQyxJQUFNb0IsYUFBYSxHQUFHLFdBQU07O0lBQzFCLElBQWdDbEIsR0FBYSxHQUFiQSwrQ0FBUSxDQUFDYyxpREFBRyxDQUFDLEVBQXRDSyxRQUFRLEdBQWlCbkIsR0FBYSxHQUE5QixFQUFFb0IsV0FBVyxHQUFJcEIsR0FBYSxHQUFqQjtJQUM1QixJQUFtQ0EsSUFBdUIsR0FBdkJBLCtDQUFRLENBQUNhLDJEQUFhLENBQUMsRUFBbkRRLFNBQVMsR0FBbUJyQixJQUF1QixHQUExQyxFQUFFc0IsWUFBWSxHQUFLdEIsSUFBdUIsR0FBNUI7SUFFOUIsSUFBb0NBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUF2Q3VCLFVBQVUsR0FBbUJ2QixJQUFVLEdBQTdCLEVBQUV3QixhQUFhLEdBQUl4QixJQUFVLEdBQWQ7SUFDaEMsSUFBc0NBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUF6Q3lCLFdBQVcsR0FBb0J6QixJQUFVLEdBQTlCLEVBQUUwQixjQUFjLEdBQUkxQixJQUFVLEdBQWQ7SUFFbEMsSUFBTTJCLGFBQWEsR0FBRzFCLDZDQUFNLEVBQUU7SUFDOUIsSUFBTTJCLGNBQWMsR0FBRzNCLDZDQUFNLEVBQUU7SUFFL0IsSUFBTTRCLFVBQVUsR0FBRzVCLDZDQUFNLENBQUMsS0FBSyxDQUFDO0lBRWhDLElBQU02QixrQkFBa0IsR0FBRyxvQkFBb0I7SUFDL0MsSUFBTUMsWUFBWSxHQUFHLGlCQUFpQjtJQUN0QyxJQUFNQyxjQUFjLEdBQUUsZ0JBQWdCO0lBQ3RDLElBQU1DLElBQUksR0FBRSxNQUFNO0lBRWxCLElBQU1DLFdBQVcsR0FBRztRQUNsQkMsRUFBRSxFQUFFLFVBQVU7UUFDZEMsS0FBSyxFQUFFYixVQUFVO1FBQ2pCYyxRQUFRLEVBQUViLGFBQWE7UUFDdkJjLFlBQVksRUFBRW5CLFFBQVE7UUFDdEJvQixXQUFXLEVBQUVsQixTQUFTO1FBQ3RCbUIsUUFBUSxFQUFFcEIsV0FBVztLQUN0QjtJQUVELElBQU1xQixZQUFZLEdBQUc7UUFDbkJOLEVBQUUsRUFBRSxXQUFXO1FBQ2ZDLEtBQUssRUFBRVgsV0FBVztRQUNsQlksUUFBUSxFQUFFWCxjQUFjO1FBQ3hCWSxZQUFZLEVBQUVqQixTQUFTO1FBQ3ZCa0IsV0FBVyxFQUFFcEIsUUFBUTtRQUNyQnFCLFFBQVEsRUFBRWxCLFlBQVk7S0FDdkI7SUFFRCxJQUF3Q3RCLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUEzQzBDLFlBQVksR0FBcUIxQyxJQUFVLEdBQS9CLEVBQUUyQyxlQUFlLEdBQUkzQyxJQUFVLEdBQWQ7SUFDcEMsSUFBMENBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUE3QzRDLGFBQWEsR0FBc0I1QyxJQUFVLEdBQWhDLEVBQUU2QyxnQkFBZ0IsR0FBSTdDLElBQVUsR0FBZDtJQUV0QyxJQUFzQ0EsSUFBc0IsR0FBdEJBLCtDQUFRLENBQUMrQixZQUFZLENBQUMsRUFBckRlLFdBQVcsR0FBb0I5QyxJQUFzQixHQUExQyxFQUFFK0MsY0FBYyxHQUFJL0MsSUFBc0IsR0FBMUI7SUFDbEMsSUFBa0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBMUNnRCxTQUFTLEdBQWtCaEQsSUFBZSxHQUFqQyxFQUFFaUQsWUFBWSxHQUFJakQsSUFBZSxHQUFuQjtJQUU5QixJQUFNa0QsV0FBVyxHQUFHLFNBQUNDLEdBQUc7ZUFBS3hDLDZEQUFXLENBQUN3QyxHQUFHLEVBQUU7WUFBQ0UsUUFBUSxFQUFFLEdBQUc7U0FBRSxDQUFDO0tBQUE7SUFDL0QsSUFBTUMsYUFBYSxHQUFHO2VBQU0zQywrREFBYSxDQUFDLHdCQUF3QixDQUFDO0tBQUE7SUFFbkUsSUFBTSxPQUFTLEdBQUtNLGlEQUFVLEVBQUUsQ0FBeEJ1QyxPQUFPO0lBRWZ6RCxnREFBUyxDQUFDLFdBQU07UUFDZCx3QkFBd0I7UUFFeEIsSUFBSSxDQUFDeUQsT0FBTyxFQUFFVCxjQUFjLENBQUNmLGNBQWMsQ0FBQyxDQUFDO2FBQ3hDLElBQUksQ0FBQ1QsVUFBVSxJQUFJLENBQUNFLFdBQVcsRUFBRXNCLGNBQWMsQ0FBQ2hCLFlBQVksQ0FBQyxDQUFDO2FBQzlEZ0IsY0FBYyxDQUFDZCxJQUFJLENBQUM7S0FDMUIsRUFBRSxFQUFFLENBQUMsQ0FBQztDQUNSO0dBckRLZixhQUFhOztRQTRDR0QsNkNBQVU7OztBQTVDMUJDLEtBQUFBLGFBQWE7QUF1RG5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Td2FwQ29tcG9uZW50LmpzPzkyZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgaGFzVmFsaWRBbGxvd2FuY2UsXG4gIGluY3JlYXNlQWxsb3dhbmNlLFxuICBzd2FwRXRoVG9Ub2tlbixcbiAgc3dhcFRva2VuVG9FdGgsXG4gIHN3YXBUb2tlblRvVG9rZW4sXG59IGZyb20gXCIuLi91dGlscy9jb250ZXh0XCI7XG5cbmltcG9ydCB7IENvZ0ljb24sIEFycm93U21Eb3duSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCBTd2FwRmllbGQgZnJvbSBcIi4vU3dhcEZpZWxkXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25TdGF0dXMgZnJvbSBcIi4vVHJhbnNhY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHsgREVGQVVMVF9WQUxVRSwgRVRIIH0gZnJvbSBcIi4uL3V0aWxzL3NhbGVUb2tlblwiO1xuaW1wb3J0IHsgdG9FdGgsIHRvV2VpIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSBcIndhZ21pXCI7XG5cbmNvbnN0IFN3YXBDb21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFtzcmNUb2tlbiwgc2V0U3JjVG9rZW5dID0gdXNlU3RhdGUoRVRIKTtcbiAgY29uc3QgW2Rlc3RUb2tlbiwgc2V0RGVzdFRva2VuXSA9ICB1c2VTdGF0ZShERUZBVUxUX1ZBTFVFKTtcblxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbb3V0cHV0VmFsdWUsIHNldE91dHB1dFZhbHVlXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgaW5wdXRWYWx1ZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBvdXRwdXRWYWx1ZVJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGlzUmV2ZXJzZWQgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGNvbnN0IElOQ1JFQVNFX0FMTE9XQU5DRSA9IFwiSW5jcmVhc2UgYWxsb3dhbmNlXCI7XG4gIGNvbnN0IEVOVEVSX0FNT1VOVCA9IFwiRW50ZXIgYW4gYW1vdW50XCI7XG4gIGNvbnN0IENPTk5FQ1RfV0FMTEVUID1cIkNvbm5lY3Qgd2FsbGV0XCI7XG4gIGNvbnN0IFNXQVAgPVwiU3dhcFwiO1xuXG4gIGNvbnN0IHNyY1Rva2VuT2JqID0ge1xuICAgIGlkOiBcInNyY1Rva2VuXCIsXG4gICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgc2V0VmFsdWU6IHNldElucHV0VmFsdWUsXG4gICAgZGVmYXVsdFZhbHVlOiBzcmNUb2tlbixcbiAgICBpZ25vcmVWYWx1ZTogZGVzdFRva2VuLFxuICAgIHNldFRva2VuOiBzZXRTcmNUb2tlbixcbiAgfTtcblxuICBjb25zdCBkZXN0VG9rZW5PYmogPSB7XG4gICAgaWQ6IFwiZGVzdFRva2VuXCIsXG4gICAgdmFsdWU6IG91dHB1dFZhbHVlLFxuICAgIHNldFZhbHVlOiBzZXRPdXRwdXRWYWx1ZSxcbiAgICBkZWZhdWx0VmFsdWU6IGRlc3RUb2tlbixcbiAgICBpZ25vcmVWYWx1ZTogc3JjVG9rZW4sXG4gICAgc2V0VG9rZW46IHNldERlc3RUb2tlbixcbiAgfTtcblxuICBjb25zdCBbc3JjVG9rZW5Db21wLCBzZXRTcmNUb2tlbkNvbXBdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Rlc3RUb2tlbkNvbXAsIHNldERlc3RUb2tlbkNvbXBdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBbc3dhcEJ0blRleHQsIHNldFN3YXBCdG5UZXh0XSA9IHVzZVN0YXRlKEVOVEVSX0FNT1VOVCk7XG4gIGNvbnN0IFt0eFBlbmRpbmcsIHNldFR4UGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgbm90aWZ5RXJyb3IgPSAobXNnKSA9PiB0b2FzdC5lcnJvcihtc2csIHtkdXJhdGlvbjogNjAwIH0pO1xuICBjb25zdCBub3RpZnlTdWNjZXNzID0gKCkgPT4gdG9hc3Quc3VjY2VzcyhcIlRyYW5zYWN0aW9uIGNvbXBsZXRlZC5cIik7XG5cbiAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL3RleHQgZm9yIHN1Ym1pdCBidXR0b25cblxuICAgIGlmICghYWRkcmVzcykgc2V0U3dhcEJ0blRleHQoQ09OTkVDVF9XQUxMRVQpO1xuICAgIGVsc2UgaWYgKCFpbnB1dFZhbHVlIHx8ICFvdXRwdXRWYWx1ZSkgc2V0U3dhcEJ0blRleHQoRU5URVJfQU1PVU5UKTtcbiAgICBlbHNlIHNldFN3YXBCdG5UZXh0KFNXQVApXG4gIH0sIFtdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN3YXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImhhc1ZhbGlkQWxsb3dhbmNlIiwiaW5jcmVhc2VBbGxvd2FuY2UiLCJzd2FwRXRoVG9Ub2tlbiIsInN3YXBUb2tlblRvRXRoIiwic3dhcFRva2VuVG9Ub2tlbiIsIkNvZ0ljb24iLCJBcnJvd1NtRG93bkljb24iLCJTd2FwRmllbGQiLCJUcmFuc2FjdGlvblN0YXR1cyIsInRvYXN0IiwiVG9hc3RlciIsIkRFRkFVTFRfVkFMVUUiLCJFVEgiLCJ0b0V0aCIsInRvV2VpIiwidXNlQWNjb3VudCIsIlN3YXBDb21wb25lbnQiLCJzcmNUb2tlbiIsInNldFNyY1Rva2VuIiwiZGVzdFRva2VuIiwic2V0RGVzdFRva2VuIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJvdXRwdXRWYWx1ZSIsInNldE91dHB1dFZhbHVlIiwiaW5wdXRWYWx1ZVJlZiIsIm91dHB1dFZhbHVlUmVmIiwiaXNSZXZlcnNlZCIsIklOQ1JFQVNFX0FMTE9XQU5DRSIsIkVOVEVSX0FNT1VOVCIsIkNPTk5FQ1RfV0FMTEVUIiwiU1dBUCIsInNyY1Rva2VuT2JqIiwiaWQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiaWdub3JlVmFsdWUiLCJzZXRUb2tlbiIsImRlc3RUb2tlbk9iaiIsInNyY1Rva2VuQ29tcCIsInNldFNyY1Rva2VuQ29tcCIsImRlc3RUb2tlbkNvbXAiLCJzZXREZXN0VG9rZW5Db21wIiwic3dhcEJ0blRleHQiLCJzZXRTd2FwQnRuVGV4dCIsInR4UGVuZGluZyIsInNldFR4UGVuZGluZyIsIm5vdGlmeUVycm9yIiwibXNnIiwiZXJyb3IiLCJkdXJhdGlvbiIsIm5vdGlmeVN1Y2Nlc3MiLCJzdWNjZXNzIiwiYWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});