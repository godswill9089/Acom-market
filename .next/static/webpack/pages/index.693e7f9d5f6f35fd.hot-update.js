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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SwapComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_5__.ETH), srcToken = ref[0], setSrcToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_VALUE), destToken = ref1[0], setDestToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), inputValue = ref2[0], setInputValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), outputValue = ref3[0], setOutputValue = ref3[1];\n    var inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    var outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    var isReversed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n    var INCREASE_ALLOWANCE = \"Increase allowance\";\n    var ENTER_AMOUNT = \"Enter an amount\";\n    var CONNECT_WALLET = \"Connect wallet\";\n    var SWAP = \"Swap\";\n    var srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    var destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), srcTokenComp = ref4[0], setSrcTokenComp = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), destTokenComp = ref5[0], setDestTokenComp = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ENTER_AMOUNT), swapBtnText = ref6[0], setSwapBtnText = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), txPending = ref7[0], setTxPending = ref7[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(msg, {\n            duration: duration\n        });\n    };\n};\n_s(SwapComponent, \"Dw2gdPsr8M2GuyhAV+c4ccD6L70=\");\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3YXBDb21wb25lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJEO0FBT2pDO0FBRTBDO0FBQ2hDO0FBQ2dCO0FBQ0g7QUFDTztBQUNWO0FBQ1g7O0FBRW5DLElBQU1vQixhQUFhLEdBQUcsV0FBTTs7SUFDMUIsSUFBZ0NsQixHQUFhLEdBQWJBLCtDQUFRLENBQUNjLGlEQUFHLENBQUMsRUFBdENLLFFBQVEsR0FBaUJuQixHQUFhLEdBQTlCLEVBQUVvQixXQUFXLEdBQUlwQixHQUFhLEdBQWpCO0lBQzVCLElBQW1DQSxJQUF1QixHQUF2QkEsK0NBQVEsQ0FBQ2EsMkRBQWEsQ0FBQyxFQUFuRFEsU0FBUyxHQUFtQnJCLElBQXVCLEdBQTFDLEVBQUVzQixZQUFZLEdBQUt0QixJQUF1QixHQUE1QjtJQUU5QixJQUFvQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQXZDdUIsVUFBVSxHQUFtQnZCLElBQVUsR0FBN0IsRUFBRXdCLGFBQWEsR0FBSXhCLElBQVUsR0FBZDtJQUNoQyxJQUFzQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQXpDeUIsV0FBVyxHQUFvQnpCLElBQVUsR0FBOUIsRUFBRTBCLGNBQWMsR0FBSTFCLElBQVUsR0FBZDtJQUVsQyxJQUFNMkIsYUFBYSxHQUFHMUIsNkNBQU0sRUFBRTtJQUM5QixJQUFNMkIsY0FBYyxHQUFHM0IsNkNBQU0sRUFBRTtJQUUvQixJQUFNNEIsVUFBVSxHQUFHNUIsNkNBQU0sQ0FBQyxLQUFLLENBQUM7SUFFaEMsSUFBTTZCLGtCQUFrQixHQUFHLG9CQUFvQjtJQUMvQyxJQUFNQyxZQUFZLEdBQUcsaUJBQWlCO0lBQ3RDLElBQU1DLGNBQWMsR0FBRSxnQkFBZ0I7SUFDdEMsSUFBTUMsSUFBSSxHQUFFLE1BQU07SUFFbEIsSUFBTUMsV0FBVyxHQUFHO1FBQ2xCQyxFQUFFLEVBQUUsVUFBVTtRQUNkQyxLQUFLLEVBQUViLFVBQVU7UUFDakJjLFFBQVEsRUFBRWIsYUFBYTtRQUN2QmMsWUFBWSxFQUFFbkIsUUFBUTtRQUN0Qm9CLFdBQVcsRUFBRWxCLFNBQVM7UUFDdEJtQixRQUFRLEVBQUVwQixXQUFXO0tBQ3RCO0lBRUQsSUFBTXFCLFlBQVksR0FBRztRQUNuQk4sRUFBRSxFQUFFLFdBQVc7UUFDZkMsS0FBSyxFQUFFWCxXQUFXO1FBQ2xCWSxRQUFRLEVBQUVYLGNBQWM7UUFDeEJZLFlBQVksRUFBRWpCLFNBQVM7UUFDdkJrQixXQUFXLEVBQUVwQixRQUFRO1FBQ3JCcUIsUUFBUSxFQUFFbEIsWUFBWTtLQUN2QjtJQUVELElBQXdDdEIsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTNDMEMsWUFBWSxHQUFxQjFDLElBQVUsR0FBL0IsRUFBRTJDLGVBQWUsR0FBSTNDLElBQVUsR0FBZDtJQUNwQyxJQUEwQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTdDNEMsYUFBYSxHQUFzQjVDLElBQVUsR0FBaEMsRUFBRTZDLGdCQUFnQixHQUFJN0MsSUFBVSxHQUFkO0lBRXRDLElBQXNDQSxJQUFzQixHQUF0QkEsK0NBQVEsQ0FBQytCLFlBQVksQ0FBQyxFQUFyRGUsV0FBVyxHQUFvQjlDLElBQXNCLEdBQTFDLEVBQUUrQyxjQUFjLEdBQUkvQyxJQUFzQixHQUExQjtJQUNsQyxJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ2dELFNBQVMsR0FBa0JoRCxJQUFlLEdBQWpDLEVBQUVpRCxZQUFZLEdBQUlqRCxJQUFlLEdBQW5CO0lBRTlCLElBQU1rRCxXQUFXLEdBQUcsU0FBQ0MsR0FBRztlQUFLeEMsNkRBQVcsQ0FBQ3dDLEdBQUcsRUFBRTtZQUFDRSxRQUFRLEVBQVJBLFFBQVE7U0FBQyxDQUFDO0tBQUE7Q0FDMUQ7R0ExQ0tuQyxhQUFhO0FBQWJBLEtBQUFBLGFBQWE7QUE0Q25CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Td2FwQ29tcG9uZW50LmpzPzkyZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgaGFzVmFsaWRBbGxvd2FuY2UsXG4gIGluY3JlYXNlQWxsb3dhbmNlLFxuICBzd2FwRXRoVG9Ub2tlbixcbiAgc3dhcFRva2VuVG9FdGgsXG4gIHN3YXBUb2tlblRvVG9rZW4sXG59IGZyb20gXCIuLi91dGlscy9jb250ZXh0XCI7XG5cbmltcG9ydCB7IENvZ0ljb24sIEFycm93U21Eb3duSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCBTd2FwRmllbGQgZnJvbSBcIi4vU3dhcEZpZWxkXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25TdGF0dXMgZnJvbSBcIi4vVHJhbnNhY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHsgREVGQVVMVF9WQUxVRSwgRVRIIH0gZnJvbSBcIi4uL3V0aWxzL3NhbGVUb2tlblwiO1xuaW1wb3J0IHsgdG9FdGgsIHRvV2VpIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSBcIndhZ21pXCI7XG5cbmNvbnN0IFN3YXBDb21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFtzcmNUb2tlbiwgc2V0U3JjVG9rZW5dID0gdXNlU3RhdGUoRVRIKTtcbiAgY29uc3QgW2Rlc3RUb2tlbiwgc2V0RGVzdFRva2VuXSA9ICB1c2VTdGF0ZShERUZBVUxUX1ZBTFVFKTtcblxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbb3V0cHV0VmFsdWUsIHNldE91dHB1dFZhbHVlXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgaW5wdXRWYWx1ZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBvdXRwdXRWYWx1ZVJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGlzUmV2ZXJzZWQgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGNvbnN0IElOQ1JFQVNFX0FMTE9XQU5DRSA9IFwiSW5jcmVhc2UgYWxsb3dhbmNlXCI7XG4gIGNvbnN0IEVOVEVSX0FNT1VOVCA9IFwiRW50ZXIgYW4gYW1vdW50XCI7XG4gIGNvbnN0IENPTk5FQ1RfV0FMTEVUID1cIkNvbm5lY3Qgd2FsbGV0XCI7XG4gIGNvbnN0IFNXQVAgPVwiU3dhcFwiO1xuXG4gIGNvbnN0IHNyY1Rva2VuT2JqID0ge1xuICAgIGlkOiBcInNyY1Rva2VuXCIsXG4gICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgc2V0VmFsdWU6IHNldElucHV0VmFsdWUsXG4gICAgZGVmYXVsdFZhbHVlOiBzcmNUb2tlbixcbiAgICBpZ25vcmVWYWx1ZTogZGVzdFRva2VuLFxuICAgIHNldFRva2VuOiBzZXRTcmNUb2tlbixcbiAgfTtcblxuICBjb25zdCBkZXN0VG9rZW5PYmogPSB7XG4gICAgaWQ6IFwiZGVzdFRva2VuXCIsXG4gICAgdmFsdWU6IG91dHB1dFZhbHVlLFxuICAgIHNldFZhbHVlOiBzZXRPdXRwdXRWYWx1ZSxcbiAgICBkZWZhdWx0VmFsdWU6IGRlc3RUb2tlbixcbiAgICBpZ25vcmVWYWx1ZTogc3JjVG9rZW4sXG4gICAgc2V0VG9rZW46IHNldERlc3RUb2tlbixcbiAgfTtcblxuICBjb25zdCBbc3JjVG9rZW5Db21wLCBzZXRTcmNUb2tlbkNvbXBdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Rlc3RUb2tlbkNvbXAsIHNldERlc3RUb2tlbkNvbXBdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBbc3dhcEJ0blRleHQsIHNldFN3YXBCdG5UZXh0XSA9IHVzZVN0YXRlKEVOVEVSX0FNT1VOVCk7XG4gIGNvbnN0IFt0eFBlbmRpbmcsIHNldFR4UGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgbm90aWZ5RXJyb3IgPSAobXNnKSA9PiB0b2FzdC5lcnJvcihtc2csIHtkdXJhdGlvbn0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTd2FwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJoYXNWYWxpZEFsbG93YW5jZSIsImluY3JlYXNlQWxsb3dhbmNlIiwic3dhcEV0aFRvVG9rZW4iLCJzd2FwVG9rZW5Ub0V0aCIsInN3YXBUb2tlblRvVG9rZW4iLCJDb2dJY29uIiwiQXJyb3dTbURvd25JY29uIiwiU3dhcEZpZWxkIiwiVHJhbnNhY3Rpb25TdGF0dXMiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJERUZBVUxUX1ZBTFVFIiwiRVRIIiwidG9FdGgiLCJ0b1dlaSIsInVzZUFjY291bnQiLCJTd2FwQ29tcG9uZW50Iiwic3JjVG9rZW4iLCJzZXRTcmNUb2tlbiIsImRlc3RUb2tlbiIsInNldERlc3RUb2tlbiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwib3V0cHV0VmFsdWUiLCJzZXRPdXRwdXRWYWx1ZSIsImlucHV0VmFsdWVSZWYiLCJvdXRwdXRWYWx1ZVJlZiIsImlzUmV2ZXJzZWQiLCJJTkNSRUFTRV9BTExPV0FOQ0UiLCJFTlRFUl9BTU9VTlQiLCJDT05ORUNUX1dBTExFVCIsIlNXQVAiLCJzcmNUb2tlbk9iaiIsImlkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsImlnbm9yZVZhbHVlIiwic2V0VG9rZW4iLCJkZXN0VG9rZW5PYmoiLCJzcmNUb2tlbkNvbXAiLCJzZXRTcmNUb2tlbkNvbXAiLCJkZXN0VG9rZW5Db21wIiwic2V0RGVzdFRva2VuQ29tcCIsInN3YXBCdG5UZXh0Iiwic2V0U3dhcEJ0blRleHQiLCJ0eFBlbmRpbmciLCJzZXRUeFBlbmRpbmciLCJub3RpZnlFcnJvciIsIm1zZyIsImVycm9yIiwiZHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});