"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/app/content/layout",{

/***/ "(app-pages-browser)/./src/components/SidenavbarApp.js":
/*!*****************************************!*\
  !*** ./src/components/SidenavbarApp.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SidenavbarApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction SidenavbarApp(param) {\n    let { sidebarOpen, setSidebarOpen } = param;\n    _s();\n    const [sidebarExpanded, setSidebarExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const sidebar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (sidebarExpanded) {\n            var _document_querySelector;\n            (_document_querySelector = document.querySelector(\"body\")) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.classList.add(\"sidebar-expanded\");\n        } else {\n            var _document_querySelector1;\n            (_document_querySelector1 = document.querySelector(\"body\")) === null || _document_querySelector1 === void 0 ? void 0 : _document_querySelector1.classList.remove(\"sidebar-expanded\");\n        }\n    }, [\n        sidebarExpanded\n    ]);\n    console.log(\"sidebarOpen***\", sidebarOpen);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setSidebarOpen(!sidebarOpen),\n                className: \"fixed inset-0 border-r border-gray-200 sm:translate-x-0 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 \".concat(sidebarOpen ? \"opacity-100\" : \"opacity-0 pointer-events-none\"),\n                \"aria-hidden\": \"true\",\n                children: \"ehdeujdje\"\n            }, void 0, false, {\n                fileName: \"/Users/dev.hemj/Documents/Creations/garage-sales-v2/src/components/SidenavbarApp.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"sidebar\",\n                ref: sidebar,\n                className: \"fixed flex flex-col z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar lg:w-64  w-72 bg-white lg:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 sm:translate-x-0 p-4 transition-all duration-200 \".concat(sidebarOpen ? \"translate-x-0\" : \"-translate-x-72\"),\n                children: [\n                    \"sidebar\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-3 lg:inline-flex  mt-auto \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"px-3 py-2 justify-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setSidebarExpanded(!sidebarExpanded),\n                                    children: [\n                                        \"wejndedkjnejendjen\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"sr-only\",\n                                            children: \"Expand / collapse sidebar\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dev.hemj/Documents/Creations/garage-sales-v2/src/components/SidenavbarApp.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dev.hemj/Documents/Creations/garage-sales-v2/src/components/SidenavbarApp.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dev.hemj/Documents/Creations/garage-sales-v2/src/components/SidenavbarApp.js\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dev.hemj/Documents/Creations/garage-sales-v2/src/components/SidenavbarApp.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dev.hemj/Documents/Creations/garage-sales-v2/src/components/SidenavbarApp.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dev.hemj/Documents/Creations/garage-sales-v2/src/components/SidenavbarApp.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SidenavbarApp, \"jTk+KLLrmppR/altXg0bVjy+1RA=\");\n_c = SidenavbarApp;\nvar _c;\n$RefreshReg$(_c, \"SidenavbarApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZGVuYXZiYXJBcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRW1EO0FBRXBDLFNBQVNHLGNBQWUsS0FBK0I7UUFBL0IsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUUsR0FBL0I7O0lBRW5DLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkQsTUFBTU0sVUFBVVAsNkNBQU1BO0lBRXRCRCxnREFBU0EsQ0FBQztRQUNOLElBQUlNLGlCQUFpQjtnQkFDakJHO2FBQUFBLDBCQUFBQSxTQUFTQyxhQUFhLENBQUMscUJBQXZCRCw4Q0FBQUEsd0JBQWdDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUNsRCxPQUFPO2dCQUNISDthQUFBQSwyQkFBQUEsU0FBU0MsYUFBYSxDQUFDLHFCQUF2QkQsK0NBQUFBLHlCQUFnQ0UsU0FBUyxDQUFDRSxNQUFNLENBQUM7UUFDckQ7SUFDSixHQUFHO1FBQUNQO0tBQWdCO0lBRXBCUSxRQUFRQyxHQUFHLENBQUMsa0JBQWtCWDtJQUU5QixxQkFDSTs7MEJBQ0ksOERBQUNZO2dCQUNEQyxTQUFTLElBQU1aLGVBQWUsQ0FBQ0Q7Z0JBQy9CYyxXQUFXLGtJQUVWLE9BREdkLGNBQWMsZ0JBQWdCO2dCQUVsQ2UsZUFBWTswQkFDWDs7Ozs7OzBCQUtELDhEQUFDSDtnQkFDR0ksSUFBRztnQkFDSEMsS0FBS2I7Z0JBQ0xVLFdBQVcsMlJBRVYsT0FER2QsY0FBYyxrQkFBa0I7O29CQUV2QztrQ0FHRyw4REFBQ1k7d0JBQUlFLFdBQVU7a0NBQ1gsNEVBQUNGOzRCQUFJRSxXQUFVO3NDQUNYLDRFQUFDRjtnQ0FBSUUsV0FBVTswQ0FDWCw0RUFBQ0k7b0NBQU9MLFNBQVMsSUFBTVYsbUJBQW1CLENBQUNEOzt3Q0FBa0I7c0RBRXpELDhEQUFDaUI7NENBQUtMLFdBQVU7c0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzFEO0dBbkR3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZW5hdmJhckFwcC5qcz82MzYxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVuYXZiYXJBcHAgKHsgc2lkZWJhck9wZW4sIHNldFNpZGViYXJPcGVuIH0pIHtcblxuICAgIGNvbnN0IFtzaWRlYmFyRXhwYW5kZWQsIHNldFNpZGViYXJFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2lkZWJhciA9IHVzZVJlZigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNpZGViYXJFeHBhbmRlZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik/LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWV4cGFuZGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik/LmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlYmFyLWV4cGFuZGVkXCIpO1xuICAgICAgICB9XG4gICAgfSwgW3NpZGViYXJFeHBhbmRlZF0pO1xuXG4gICAgY29uc29sZS5sb2coXCJzaWRlYmFyT3BlbioqKlwiLCBzaWRlYmFyT3BlbilcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyT3Blbighc2lkZWJhck9wZW4pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgaW5zZXQtMCBib3JkZXItciBib3JkZXItZ3JheS0yMDAgc206dHJhbnNsYXRlLXgtMCBiZy1vcGFjaXR5LTMwIHotNDAgbGc6aGlkZGVuIGxnOnotYXV0byB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMjAwICR7XG4gICAgICAgICAgICAgICAgc2lkZWJhck9wZW4gPyBcIm9wYWNpdHktMTAwXCIgOiBcIm9wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBlaGRldWpkamVcbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXJcIlxuICAgICAgICAgICAgICAgIHJlZj17c2lkZWJhcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaXhlZCBmbGV4IGZsZXgtY29sIHotNDAgbGVmdC0wIHRvcC0wIGxnOnN0YXRpYyBsZzpsZWZ0LWF1dG8gbGc6dG9wLWF1dG8gbGc6dHJhbnNsYXRlLXgtMCBoLXNjcmVlbiBvdmVyZmxvdy15LXNjcm9sbCBsZzpvdmVyZmxvdy15LWF1dG8gbm8tc2Nyb2xsYmFyIGxnOnctNjQgIHctNzIgYmctd2hpdGUgbGc6c2lkZWJhci1leHBhbmRlZDp3LTIwIHNocmluay0wIGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMCBzbTp0cmFuc2xhdGUteC0wIHAtNCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgJHtcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhck9wZW4gPyBcInRyYW5zbGF0ZS14LTBcIiA6IFwiLXRyYW5zbGF0ZS14LTcyXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBzaWRlYmFyXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgbGc6aW5saW5lLWZsZXggIG10LWF1dG8gXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgcHktMiBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2lkZWJhckV4cGFuZGVkKCFzaWRlYmFyRXhwYW5kZWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VqbmRlZGtqbmVqZW5kamVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5FeHBhbmQgLyBjb2xsYXBzZSBzaWRlYmFyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlNpZGVuYXZiYXJBcHAiLCJzaWRlYmFyT3BlbiIsInNldFNpZGViYXJPcGVuIiwic2lkZWJhckV4cGFuZGVkIiwic2V0U2lkZWJhckV4cGFuZGVkIiwic2lkZWJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiYXJpYS1oaWRkZW4iLCJpZCIsInJlZiIsImJ1dHRvbiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SidenavbarApp.js\n"));

/***/ })

});