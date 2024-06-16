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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/saleToken */ \"./utils/saleToken.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Selector = function(param) {\n    var defaultValue = param.defaultValue, ignoreValue = param.ignoreValue, setToken = param.setToken, id = param.id;\n    var getFilteredItems = function getFilteredItems(ignoreValue) {\n        return menu.filter(function(item) {\n            return item[\"key\"] !== ignoreValue;\n        });\n    };\n    _s();\n    var menu = [\n        {\n            key: ETH,\n            name: ETH\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_1,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_1\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_2,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_2\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_3,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_3\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_4,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_4\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_5,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_5\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_6,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_6\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_7,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_7\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_8,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.COIN_8\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), SelectedItem = ref[0], setSelectedItem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getFilteredItems(ignoreValue)), menuItems = ref1[0], setMenuItems = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSelectedItem(defaultValue);\n    }, [\n        defaultValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setMenuItems(getFilteredItems(ignoreValue));\n    }, [\n        ignoreValue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Button, {\n                css: {\n                    backgroundColor: SelectedItem === _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_VALUE ? \"#7765F3\" : \"#2c2f36\"\n                },\n                children: SelectedItem\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Selector.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Dropdown.Menu, {\n                \"aria-label\": \"Dynamic Actions\",\n                items: menuItems,\n                onAction: function(key) {\n                    setSelectedItem(key);\n                    set;\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Selector.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Acom-market-main\\\\components\\\\Selector.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this);\n};\n_s(Selector, \"KJwGDZDNgOUOTlfsHdijX8cURsU=\");\n_c = Selector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Selector);\nvar _c;\n$RefreshReg$(_c, \"Selector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHtcbiAgQ09JTl8xLFxuICBDT0lOXzIsXG4gIENPSU5fMyxcbiAgQ09JTl80LFxuICBDT0lOXzUsXG4gIENPSU5fNixcbiAgQ09JTl83LFxuICBDT0lOXzgsXG4gIERFRkFVTFRfVkFMVUUsXG59IGZyb20gXCIuLi91dGlscy9zYWxlVG9rZW5cIjtcblxuY29uc3QgU2VsZWN0b3IgPSAoeyBkZWZhdWx0VmFsdWUsIGlnbm9yZVZhbHVlLCBzZXRUb2tlbiwgaWQgfSkgPT4ge1xuICBjb25zdCBtZW51ID0gW1xuICAgIHsga2V5OiBFVEgsIG5hbWU6IEVUSCB9LFxuICAgIHsga2V5OiBDT0lOXzEsIG5hbWU6IENPSU5fMSB9LFxuICAgIHsga2V5OiBDT0lOXzIsIG5hbWU6IENPSU5fMiB9LFxuICAgIHsga2V5OiBDT0lOXzMsIG5hbWU6IENPSU5fMyB9LFxuICAgIHsga2V5OiBDT0lOXzQsIG5hbWU6IENPSU5fNCB9LFxuICAgIHsga2V5OiBDT0lOXzUsIG5hbWU6IENPSU5fNSB9LFxuICAgIHsga2V5OiBDT0lOXzYsIG5hbWU6IENPSU5fNiB9LFxuICAgIHsga2V5OiBDT0lOXzcsIG5hbWU6IENPSU5fNyB9LFxuICAgIHsga2V5OiBDT0lOXzgsIG5hbWU6IENPSU5fOCB9LFxuICBdO1xuXG4gIGNvbnN0IFtTZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbWVudUl0ZW1zLCBzZXRNZW51SXRlbXNdID0gdXNlU3RhdGUoZ2V0RmlsdGVyZWRJdGVtcyhpZ25vcmVWYWx1ZSkpO1xuXG4gIGZ1bmN0aW9uIGdldEZpbHRlcmVkSXRlbXMoaWdub3JlVmFsdWUpIHtcbiAgICByZXR1cm4gbWVudS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW1bXCJrZXlcIl0gIT09aWdub3JlVmFsdWUpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZWxlY3RlZEl0ZW0oZGVmYXVsdFZhbHVlKTtcbiAgfSwgW2RlZmF1bHRWYWx1ZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PntcbiAgICBzZXRNZW51SXRlbXMoZ2V0RmlsdGVyZWRJdGVtcyhpZ25vcmVWYWx1ZSkpO1xuICB9LCBbaWdub3JlVmFsdWVdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPERyb3Bkb3duPlxuICAgICAgPERyb3Bkb3duLkJ1dHRvblxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgU2VsZWN0ZWRJdGVtID09PSBERUZBVUxUX1ZBTFVFID8gXCIjNzc2NUYzXCIgOiBcIiMyYzJmMzZcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge1NlbGVjdGVkSXRlbX1cbiAgICAgIDwvRHJvcGRvd24uQnV0dG9uPlxuICAgICAgPERyb3Bkb3duLk1lbnVcbiAgICAgICAgYXJpYS1sYWJlbD1cIkR5bmFtaWMgQWN0aW9uc1wiXG4gICAgICAgIGl0ZW1zPXttZW51SXRlbXN9XG4gICAgICAgIG9uQWN0aW9uPXsoa2V5KSA9PiB7XG4gICAgICAgICAgc2V0U2VsZWN0ZWRJdGVtKGtleSk7XG4gICAgICAgICAgc2V0XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgPC9Ecm9wZG93bj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRHJvcGRvd24iLCJDT0lOXzEiLCJDT0lOXzIiLCJDT0lOXzMiLCJDT0lOXzQiLCJDT0lOXzUiLCJDT0lOXzYiLCJDT0lOXzciLCJDT0lOXzgiLCJERUZBVUxUX1ZBTFVFIiwiU2VsZWN0b3IiLCJkZWZhdWx0VmFsdWUiLCJpZ25vcmVWYWx1ZSIsInNldFRva2VuIiwiaWQiLCJnZXRGaWx0ZXJlZEl0ZW1zIiwibWVudSIsImZpbHRlciIsIml0ZW0iLCJrZXkiLCJFVEgiLCJuYW1lIiwiU2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwibWVudUl0ZW1zIiwic2V0TWVudUl0ZW1zIiwiQnV0dG9uIiwiY3NzIiwiYmFja2dyb3VuZENvbG9yIiwiTWVudSIsImFyaWEtbGFiZWwiLCJpdGVtcyIsIm9uQWN0aW9uIiwic2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Selector.js\n"));

/***/ })

});