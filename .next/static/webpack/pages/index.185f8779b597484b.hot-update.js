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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SingleCard = function(param) {\n    var index = param.index, name = param.name, walletAddress = param.walletAddress;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"-\"), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), tokenAddress = ref1[0], setTokenAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ClipboardIcon\n    }), copyIcon = ref2[0], setCopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), txPending = ref3[0], setTxPending = ref3[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifySuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Transaction completed\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        if (name && walletAddress) {\n            fetchTokenBalance();\n        }\n    });\n};\n_s(SingleCard, \"L6iFJ9gEI9N2BVpzrUo1y9HtTRA=\");\n_c = SingleCard;\nvar _c;\n$RefreshReg$(_c, \"SingleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZUNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyRDtBQUtqQztBQUNNO0FBQ29CO0FBQ0g7QUFNZjs7QUFFbEMsSUFBTWMsVUFBVSxHQUFHLGdCQUFvQztRQUFqQ0MsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxhQUFhLFNBQWJBLGFBQWE7O0lBQzlDLElBQThCZixHQUFhLEdBQWJBLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBQXBDZ0IsT0FBTyxHQUFnQmhCLEdBQWEsR0FBN0IsRUFBRWlCLFVBQVUsR0FBSWpCLEdBQWEsR0FBakI7SUFDMUIsSUFBd0NBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUEzQ2tCLFlBQVksR0FBcUJsQixJQUFVLEdBQS9CLEVBQUVtQixlQUFlLEdBQUluQixJQUFVLEdBQWQ7SUFFcEMsSUFBZ0NBLElBQWlDLEdBQWpDQSwrQ0FBUSxDQUFDO1FBQUVvQixJQUFJLEVBQUVYLG1FQUFhO0tBQUUsQ0FBQyxFQUExRFksUUFBUSxHQUFpQnJCLElBQWlDLEdBQWxELEVBQUVzQixXQUFXLEdBQUl0QixJQUFpQyxHQUFyQztJQUU1QixJQUFrQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ3VCLFNBQVMsR0FBa0J2QixJQUFlLEdBQWpDLEVBQUV3QixZQUFZLEdBQUl4QixJQUFlLEdBQW5CO0lBRTlCLElBQU15QixXQUFXLEdBQUcsU0FBQ0MsR0FBRztlQUFLbkIsNkRBQVcsQ0FBQ21CLEdBQUcsRUFBRTtZQUFFRSxRQUFRLEVBQUUsSUFBSTtTQUFFLENBQUM7S0FBQTtJQUNqRSxJQUFNQyxhQUFhLEdBQUc7ZUFBTXRCLCtEQUFhLENBQUMsdUJBQXVCLENBQUM7S0FBQTtJQUVsRVIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSWUsSUFBSSxJQUFJQyxhQUFhLEVBQUU7WUFDekJnQixpQkFBaUIsRUFBRTtTQUNwQjtLQUNGLENBQUM7Q0FDSDtHQWhCS25CLFVBQVU7QUFBVkEsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpbmdsZUNhcmQuanM/MjNlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBnZXRUb2tlbkFkZHJlc3MsXG4gIGdldFRva2VuQmFsYW5jZSxcbiAgaW5jcmVhc2VBbGxvd2FuY2UsXG59IGZyb20gXCIuLi91dGlscy9jb250ZXh0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25TdGF0dXMgZnJvbSBcIi4vVHJhbnNhY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuXG5pbXBvcnQge1xuICBDbGlwYm9hcmRJY29uLFxuICBDbGlwYm9hcmRDaGVja0ljb24sXG4gIFBsdXNJY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5cbmNvbnN0IFNpbmdsZUNhcmQgPSAoeyBpbmRleCwgbmFtZSwgd2FsbGV0QWRkcmVzcyB9KSA9PiB7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKFwiLVwiKTtcbiAgY29uc3QgW3Rva2VuQWRkcmVzcywgc2V0VG9rZW5BZGRyZXNzXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgW2NvcHlJY29uLCBzZXRDb3B5SWNvbl0gPSB1c2VTdGF0ZSh7IGljb246IENsaXBib2FyZEljb24gfSk7XG5cbiAgY29uc3QgW3R4UGVuZGluZywgc2V0VHhQZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBub3RpZnlFcnJvciA9IChtc2cpID0+IHRvYXN0LmVycm9yKG1zZywgeyBkdXJhdGlvbjogNjAwMCB9KTtcbiAgY29uc3Qgbm90aWZ5U3VjY2VzcyA9ICgpID0+IHRvYXN0LnN1Y2Nlc3MoXCJUcmFuc2FjdGlvbiBjb21wbGV0ZWRcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobmFtZSAmJiB3YWxsZXRBZGRyZXNzKSB7XG4gICAgICBmZXRjaFRva2VuQmFsYW5jZSgpXG4gICAgfVxuICB9KVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiZ2V0VG9rZW5BZGRyZXNzIiwiZ2V0VG9rZW5CYWxhbmNlIiwiaW5jcmVhc2VBbGxvd2FuY2UiLCJldGhlcnMiLCJUcmFuc2FjdGlvblN0YXR1cyIsInRvYXN0IiwiVG9hc3RlciIsIkNsaXBib2FyZEljb24iLCJDbGlwYm9hcmRDaGVja0ljb24iLCJQbHVzSWNvbiIsIlNpbmdsZUNhcmQiLCJpbmRleCIsIm5hbWUiLCJ3YWxsZXRBZGRyZXNzIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJ0b2tlbkFkZHJlc3MiLCJzZXRUb2tlbkFkZHJlc3MiLCJpY29uIiwiY29weUljb24iLCJzZXRDb3B5SWNvbiIsInR4UGVuZGluZyIsInNldFR4UGVuZGluZyIsIm5vdGlmeUVycm9yIiwibXNnIiwiZXJyb3IiLCJkdXJhdGlvbiIsIm5vdGlmeVN1Y2Nlc3MiLCJzdWNjZXNzIiwiZmV0Y2hUb2tlbkJhbGFuY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SingleCard.js\n"));

/***/ })

});