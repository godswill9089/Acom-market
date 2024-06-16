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

/***/ "./components/Selector.js":
/*!********************************!*\
  !*** ./components/Selector.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n\n\n\nvar _s = $RefreshSig$();\nvar Selector = function(param) {\n    var defaultValue = param.defaultValue, ignoreValue = param.ignoreValue, setToken = param.setToken, id = param.id;\n    var getFilteredItems = function getFilteredItems(ignoreValue) {\n        return menu.filter(function(item) {\n            return item[\"key\"] !== ignoreValue;\n        });\n    };\n    _s();\n    var menu = [\n        {\n            key: ETH,\n            name: ETH\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_1,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_1\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_2,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_2\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_3,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_3\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_4,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_4\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_5,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_5\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_6,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_6\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_7,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_7\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_8,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_8\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), SelectedItem = ref[0], setSelectedItem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getFilteredItems(ignoreValue)), menuItems = ref1[0], setMenuItems = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        setSelectedItem(defaultValue);\n    });\n};\n_s(Selector, \"m6RBxoH4/4+lQuUlrubojrWEPt4=\");\n_c = Selector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Selector);\nvar _c;\n$RefreshReg$(_c, \"Selector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGVjdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBbUQ7QUFFTjtBQVdqQjs7QUFFNUIsSUFBTWEsUUFBUSxHQUFHLGdCQUFpRDtRQUE5Q0MsWUFBWSxTQUFaQSxZQUFZLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsRUFBRSxTQUFGQSxFQUFFO1FBZ0JoREMsZ0JBQWdCLEdBQXpCLFNBQVNBLGdCQUFnQixDQUFDSCxXQUFXLEVBQUU7UUFDckMsT0FBT0ksSUFBSSxDQUFDQyxNQUFNLENBQUMsU0FBQ0MsSUFBSTttQkFBS0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJTixXQUFXO1NBQUEsQ0FBQyxDQUFDO0tBQzFEOztJQWpCRCxJQUFNSSxJQUFJLEdBQUc7UUFDWDtZQUFFRyxHQUFHLEVBQUVDLEdBQUc7WUFBRUMsSUFBSSxFQUFFRCxHQUFHO1NBQUU7UUFDdkI7WUFBRUQsR0FBRyxFQUFFbEIsb0RBQU07WUFBRW9CLElBQUksRUFBRXBCLG9EQUFNO1NBQUU7UUFDN0I7WUFBRWtCLEdBQUcsRUFBRWpCLG9EQUFNO1lBQUVtQixJQUFJLEVBQUVuQixvREFBTTtTQUFFO1FBQzdCO1lBQUVpQixHQUFHLEVBQUVoQixvREFBTTtZQUFFa0IsSUFBSSxFQUFFbEIsb0RBQU07U0FBRTtRQUM3QjtZQUFFZ0IsR0FBRyxFQUFFZixvREFBTTtZQUFFaUIsSUFBSSxFQUFFakIsb0RBQU07U0FBRTtRQUM3QjtZQUFFZSxHQUFHLEVBQUVkLG9EQUFNO1lBQUVnQixJQUFJLEVBQUVoQixvREFBTTtTQUFFO1FBQzdCO1lBQUVjLEdBQUcsRUFBRWIsb0RBQU07WUFBRWUsSUFBSSxFQUFFZixvREFBTTtTQUFFO1FBQzdCO1lBQUVhLEdBQUcsRUFBRVosb0RBQU07WUFBRWMsSUFBSSxFQUFFZCxvREFBTTtTQUFFO1FBQzdCO1lBQUVZLEdBQUcsRUFBRVgsb0RBQU07WUFBRWEsSUFBSSxFQUFFYixvREFBTTtTQUFFO0tBQzlCO0lBRUQsSUFBd0NULEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUEzQ3VCLFlBQVksR0FBcUJ2QixHQUFVLEdBQS9CLEVBQUV3QixlQUFlLEdBQUl4QixHQUFVLEdBQWQ7SUFDcEMsSUFBa0NBLElBQXVDLEdBQXZDQSwrQ0FBUSxDQUFDZ0IsZ0JBQWdCLENBQUNILFdBQVcsQ0FBQyxDQUFDLEVBQWxFWSxTQUFTLEdBQWtCekIsSUFBdUMsR0FBekQsRUFBRTBCLFlBQVksR0FBSTFCLElBQXVDLEdBQTNDO0lBTTlCRCxnREFBUyxDQUFDLFdBQU07UUFDZHlCLGVBQWUsQ0FBQ1osWUFBWSxDQUFDO0tBQzlCLENBQUM7Q0FDSDtHQXZCS0QsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBeUJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWxlY3Rvci5qcz83NzVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQge1xuICBDT0lOXzEsXG4gIENPSU5fMixcbiAgQ09JTl8zLFxuICBDT0lOXzQsXG4gIENPSU5fNSxcbiAgQ09JTl82LFxuICBDT0lOXzcsXG4gIENPSU5fOCxcbiAgREVGQVVMVF9WQUxVRSxcbn0gZnJvbSBcIi4uL3V0aWxzL3NhbGVUb2tlblwiO1xuXG5jb25zdCBTZWxlY3RvciA9ICh7IGRlZmF1bHRWYWx1ZSwgaWdub3JlVmFsdWUsIHNldFRva2VuLCBpZCB9KSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBbXG4gICAgeyBrZXk6IEVUSCwgbmFtZTogRVRIIH0sXG4gICAgeyBrZXk6IENPSU5fMSwgbmFtZTogQ09JTl8xIH0sXG4gICAgeyBrZXk6IENPSU5fMiwgbmFtZTogQ09JTl8yIH0sXG4gICAgeyBrZXk6IENPSU5fMywgbmFtZTogQ09JTl8zIH0sXG4gICAgeyBrZXk6IENPSU5fNCwgbmFtZTogQ09JTl80IH0sXG4gICAgeyBrZXk6IENPSU5fNSwgbmFtZTogQ09JTl81IH0sXG4gICAgeyBrZXk6IENPSU5fNiwgbmFtZTogQ09JTl82IH0sXG4gICAgeyBrZXk6IENPSU5fNywgbmFtZTogQ09JTl83IH0sXG4gICAgeyBrZXk6IENPSU5fOCwgbmFtZTogQ09JTl84IH0sXG4gIF07XG5cbiAgY29uc3QgW1NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFttZW51SXRlbXMsIHNldE1lbnVJdGVtc10gPSB1c2VTdGF0ZShnZXRGaWx0ZXJlZEl0ZW1zKGlnbm9yZVZhbHVlKSk7XG5cbiAgZnVuY3Rpb24gZ2V0RmlsdGVyZWRJdGVtcyhpZ25vcmVWYWx1ZSkge1xuICAgIHJldHVybiBtZW51LmZpbHRlcigoaXRlbSkgPT4gaXRlbVtcImtleVwiXSAhPT1pZ25vcmVWYWx1ZSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkSXRlbShkZWZhdWx0VmFsdWUpXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEcm9wZG93biIsIkNPSU5fMSIsIkNPSU5fMiIsIkNPSU5fMyIsIkNPSU5fNCIsIkNPSU5fNSIsIkNPSU5fNiIsIkNPSU5fNyIsIkNPSU5fOCIsIkRFRkFVTFRfVkFMVUUiLCJTZWxlY3RvciIsImRlZmF1bHRWYWx1ZSIsImlnbm9yZVZhbHVlIiwic2V0VG9rZW4iLCJpZCIsImdldEZpbHRlcmVkSXRlbXMiLCJtZW51IiwiZmlsdGVyIiwiaXRlbSIsImtleSIsIkVUSCIsIm5hbWUiLCJTZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJtZW51SXRlbXMiLCJzZXRNZW51SXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Selector.js\n"));

/***/ })

});