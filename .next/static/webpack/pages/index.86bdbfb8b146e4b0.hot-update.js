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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\n\n\n\nvar _s = $RefreshSig$();\nvar Selector = function(param) {\n    var defaultValue = param.defaultValue, ignoreValue = param.ignoreValue, setToken = param.setToken, id = param.id;\n    var getFilteredItems = function getFilteredItems(ignoreValue) {\n        return menu.f;\n    };\n    _s();\n    var menu = [\n        {\n            key: ETH,\n            name: ETH\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_1,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_1\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_2,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_2\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_3,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_3\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_4,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_4\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_5,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_5\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_6,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_6\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_7,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_7\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_8,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_1__.COIN_8\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), SelectedItem = ref[0], setSelectedItem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getFilteredItems(ignoreValue)), menuItems = ref1[0], setMenuItems = ref1[1];\n};\n_s(Selector, \"WygqW5Q8gjLbQ4vtCelkct1tzkA=\");\n_c = Selector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Selector);\nvar _c;\n$RefreshReg$(_c, \"Selector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGVjdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBbUQ7QUFFTjtBQVdqQjs7QUFFNUIsSUFBTWEsUUFBUSxHQUFHLGdCQUFpRDtRQUE5Q0MsWUFBWSxTQUFaQSxZQUFZLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsRUFBRSxTQUFGQSxFQUFFO1FBZ0JoREMsZ0JBQWdCLEdBQXpCLFNBQVNBLGdCQUFnQixDQUFDSCxXQUFXLEVBQUU7UUFDckMsT0FBT0ksSUFBSSxDQUFDQyxDQUFDO0tBQ2Q7O0lBakJELElBQU1ELElBQUksR0FBRztRQUNYO1lBQUVFLEdBQUcsRUFBRUMsR0FBRztZQUFFQyxJQUFJLEVBQUVELEdBQUc7U0FBRTtRQUN2QjtZQUFFRCxHQUFHLEVBQUVqQixvREFBTTtZQUFFbUIsSUFBSSxFQUFFbkIsb0RBQU07U0FBRTtRQUM3QjtZQUFFaUIsR0FBRyxFQUFFaEIsb0RBQU07WUFBRWtCLElBQUksRUFBRWxCLG9EQUFNO1NBQUU7UUFDN0I7WUFBRWdCLEdBQUcsRUFBRWYsb0RBQU07WUFBRWlCLElBQUksRUFBRWpCLG9EQUFNO1NBQUU7UUFDN0I7WUFBRWUsR0FBRyxFQUFFZCxvREFBTTtZQUFFZ0IsSUFBSSxFQUFFaEIsb0RBQU07U0FBRTtRQUM3QjtZQUFFYyxHQUFHLEVBQUViLG9EQUFNO1lBQUVlLElBQUksRUFBRWYsb0RBQU07U0FBRTtRQUM3QjtZQUFFYSxHQUFHLEVBQUVaLG9EQUFNO1lBQUVjLElBQUksRUFBRWQsb0RBQU07U0FBRTtRQUM3QjtZQUFFWSxHQUFHLEVBQUVYLG9EQUFNO1lBQUVhLElBQUksRUFBRWIsb0RBQU07U0FBRTtRQUM3QjtZQUFFVyxHQUFHLEVBQUVWLG9EQUFNO1lBQUVZLElBQUksRUFBRVosb0RBQU07U0FBRTtLQUM5QjtJQUVELElBQXdDVCxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBM0NzQixZQUFZLEdBQXFCdEIsR0FBVSxHQUEvQixFQUFFdUIsZUFBZSxHQUFJdkIsR0FBVSxHQUFkO0lBQ3BDLElBQWtDQSxJQUF1QyxHQUF2Q0EsK0NBQVEsQ0FBQ2dCLGdCQUFnQixDQUFDSCxXQUFXLENBQUMsQ0FBQyxFQUFsRVcsU0FBUyxHQUFrQnhCLElBQXVDLEdBQXpELEVBQUV5QixZQUFZLEdBQUl6QixJQUF1QyxHQUEzQztDQUsvQjtHQW5CS1csUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBcUJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWxlY3Rvci5qcz83NzVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQge1xuICBDT0lOXzEsXG4gIENPSU5fMixcbiAgQ09JTl8zLFxuICBDT0lOXzQsXG4gIENPSU5fNSxcbiAgQ09JTl82LFxuICBDT0lOXzcsXG4gIENPSU5fOCxcbiAgREVGQVVMVF9WQUxVRSxcbn0gZnJvbSBcIi4uL3V0aWxzL3NhbGVUb2tlblwiO1xuXG5jb25zdCBTZWxlY3RvciA9ICh7IGRlZmF1bHRWYWx1ZSwgaWdub3JlVmFsdWUsIHNldFRva2VuLCBpZCB9KSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBbXG4gICAgeyBrZXk6IEVUSCwgbmFtZTogRVRIIH0sXG4gICAgeyBrZXk6IENPSU5fMSwgbmFtZTogQ09JTl8xIH0sXG4gICAgeyBrZXk6IENPSU5fMiwgbmFtZTogQ09JTl8yIH0sXG4gICAgeyBrZXk6IENPSU5fMywgbmFtZTogQ09JTl8zIH0sXG4gICAgeyBrZXk6IENPSU5fNCwgbmFtZTogQ09JTl80IH0sXG4gICAgeyBrZXk6IENPSU5fNSwgbmFtZTogQ09JTl81IH0sXG4gICAgeyBrZXk6IENPSU5fNiwgbmFtZTogQ09JTl82IH0sXG4gICAgeyBrZXk6IENPSU5fNywgbmFtZTogQ09JTl83IH0sXG4gICAgeyBrZXk6IENPSU5fOCwgbmFtZTogQ09JTl84IH0sXG4gIF07XG5cbiAgY29uc3QgW1NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFttZW51SXRlbXMsIHNldE1lbnVJdGVtc10gPSB1c2VTdGF0ZShnZXRGaWx0ZXJlZEl0ZW1zKGlnbm9yZVZhbHVlKSk7XG5cbiAgZnVuY3Rpb24gZ2V0RmlsdGVyZWRJdGVtcyhpZ25vcmVWYWx1ZSkge1xuICAgIHJldHVybiBtZW51LmZcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRHJvcGRvd24iLCJDT0lOXzEiLCJDT0lOXzIiLCJDT0lOXzMiLCJDT0lOXzQiLCJDT0lOXzUiLCJDT0lOXzYiLCJDT0lOXzciLCJDT0lOXzgiLCJERUZBVUxUX1ZBTFVFIiwiU2VsZWN0b3IiLCJkZWZhdWx0VmFsdWUiLCJpZ25vcmVWYWx1ZSIsInNldFRva2VuIiwiaWQiLCJnZXRGaWx0ZXJlZEl0ZW1zIiwibWVudSIsImYiLCJrZXkiLCJFVEgiLCJuYW1lIiwiU2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwibWVudUl0ZW1zIiwic2V0TWVudUl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Selector.js\n"));

/***/ })

});