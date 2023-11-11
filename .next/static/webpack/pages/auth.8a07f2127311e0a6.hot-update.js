"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth",{

/***/ "./pages/auth.tsx":
/*!************************!*\
  !*** ./pages/auth.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Input */ \"./components/Input.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Auth = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [variant, setVariant] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"login\");\n    const toggleVariant = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        setVariant((currentVariant)=>currentVariant === \"login\" ? \"register\" : \"login\");\n    }, []);\n    const register = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/register\", {\n                email,\n                name,\n                password\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    }, [\n        email,\n        name,\n        password\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black bg-opacity-50 w-full h-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"px-12 py-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/logo.png\",\n                        alt: \"Logo\",\n                        className: \"h-12\"\n                    }, void 0, false, {\n                        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-black bg-opacity-70 px-16 py-16 self-center mt-2 w-2/5 max-w-md rounded-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-white text-4xl mb-8 font-semibold\",\n                                children: variant === \"login\" ? \"Sign in\" : \"Register\"\n                            }, void 0, false, {\n                                fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-4\",\n                                children: [\n                                    variant === \"register\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        label: \"Username\",\n                                        onChange: (ev)=>setName(ev.target.value),\n                                        id: \"name\",\n                                        value: name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        label: \"Email\",\n                                        onChange: (ev)=>setEmail(ev.target.value),\n                                        id: \"email\",\n                                        type: \"email\",\n                                        value: email\n                                    }, void 0, false, {\n                                        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        label: \"Password\",\n                                        onChange: (ev)=>setPassword(ev.target.value),\n                                        id: \"password\",\n                                        type: \"password\",\n                                        value: password\n                                    }, void 0, false, {\n                                        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: register,\n                                className: \"bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition\",\n                                children: variant === \"login\" ? \"Login\" : \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-neutral-500 mt-12\",\n                                children: [\n                                    variant === \"login\" ? \"First time using Netflix?\" : \"Already have an account?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: toggleVariant,\n                                        className: \"text-white ml-1 hover:underline cursor-pointer\",\n                                        children: variant === \"login\" ? \"Create an account\" : \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Auth, \"LgiyWR3tLl4SWkXPkEkX3yFZo0o=\");\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUM7QUFDTztBQUNwQjtBQUUxQixNQUFNSSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNVyxnQkFBZ0JaLGtEQUFXQSxDQUFDO1FBQ2hDVyxXQUFXLENBQUNFLGlCQUNWQSxtQkFBbUIsVUFBVSxhQUFhO0lBRTlDLEdBQUcsRUFBRTtJQUVMLE1BQU1DLFdBQVdkLGtEQUFXQSxDQUFDO1FBQzNCLElBQUk7WUFDRixNQUFNRSxrREFBVSxDQUFDLGlCQUFnQjtnQkFDL0JFO2dCQUNBRTtnQkFDQUU7WUFDRjtRQUNGLEVBQUMsT0FBT1EsT0FBTztZQUNiQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRixHQUFFO1FBQUNaO1FBQU9FO1FBQU1FO0tBQVM7SUFFekIscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0U7d0JBQUlDLEtBQUk7d0JBQW1CQyxLQUFJO3dCQUFPSixXQUFVOzs7Ozs7Ozs7Ozs4QkFHbkQsOERBQUNEO29CQUFJQyxXQUFVOzhCQUViLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBRWIsOERBQUNLO2dDQUFHTCxXQUFVOzBDQUNYVixZQUFZLFVBQVUsWUFBWTs7Ozs7OzBDQUVyQyw4REFBQ1M7Z0NBQUlDLFdBQVU7O29DQUNaVixZQUFZLDRCQUNYLDhEQUFDWCx5REFBS0E7d0NBQ0oyQixPQUFNO3dDQUNOQyxVQUFVLENBQUNDLEtBQVlyQixRQUFRcUIsR0FBR0MsTUFBTSxDQUFDQyxLQUFLO3dDQUM5Q0MsSUFBRzt3Q0FDSEQsT0FBT3hCOzs7Ozs7a0RBR1gsOERBQUNQLHlEQUFLQTt3Q0FDSjJCLE9BQU07d0NBQ05DLFVBQVUsQ0FBQ0MsS0FBWXZCLFNBQVN1QixHQUFHQyxNQUFNLENBQUNDLEtBQUs7d0NBQy9DQyxJQUFHO3dDQUNIQyxNQUFLO3dDQUNMRixPQUFPMUI7Ozs7OztrREFFVCw4REFBQ0wseURBQUtBO3dDQUNKMkIsT0FBTTt3Q0FDTkMsVUFBVSxDQUFDQyxLQUFZbkIsWUFBWW1CLEdBQUdDLE1BQU0sQ0FBQ0MsS0FBSzt3Q0FDbERDLElBQUc7d0NBQ0hDLE1BQUs7d0NBQ0xGLE9BQU90Qjs7Ozs7Ozs7Ozs7OzBDQUdYLDhEQUFDeUI7Z0NBQU9DLFNBQVNwQjtnQ0FBVU0sV0FBVTswQ0FDbENWLFlBQVksVUFBVSxVQUFVOzs7Ozs7MENBRW5DLDhEQUFDeUI7Z0NBQUVmLFdBQVU7O29DQUNWVixZQUFZLFVBQ1QsOEJBQ0E7a0RBQ0osOERBQUMwQjt3Q0FDQ0YsU0FBU3RCO3dDQUNUUSxXQUFVO2tEQUVUVixZQUFZLFVBQVUsc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTdEO0dBbEZNUDtLQUFBQTtBQW9GTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoLnRzeD80MWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dCBmcm9tIFwiQC9jb21wb25lbnRzL0lucHV0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEF1dGggPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IFt2YXJpYW50LCBzZXRWYXJpYW50XSA9IHVzZVN0YXRlKFwibG9naW5cIik7XG5cbiAgY29uc3QgdG9nZ2xlVmFyaWFudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRWYXJpYW50KChjdXJyZW50VmFyaWFudCkgPT5cbiAgICAgIGN1cnJlbnRWYXJpYW50ID09PSBcImxvZ2luXCIgPyBcInJlZ2lzdGVyXCIgOiBcImxvZ2luXCJcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVnaXN0ZXIgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcmVnaXN0ZXInLHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgICB9KTtcbiAgICB9Y2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9LFtlbWFpbCwgbmFtZSwgcGFzc3dvcmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIHctZnVsbCBiZy1bdXJsKCcvaW1hZ2VzL2hlcm8uanBnJyldIGJnLW5vLXJlcGVhdCBiZy1jZW50ZXIgYmctZml4ZWQgYmctY292ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgYmctb3BhY2l0eS01MCB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicHgtMTIgcHktNVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIkxvZ29cIiBjbGFzc05hbWU9XCJoLTEyXCIgLz5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgey8qIOWMheWQqyBcIlNpZ24gaW5cIiDnmoQgZGl2IOW6lOivpeW1jOWll+WcqOatpCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIGJnLW9wYWNpdHktNzAgcHgtMTYgcHktMTYgc2VsZi1jZW50ZXIgbXQtMiB3LTIvNSBtYXgtdy1tZCByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICB7Lyog5L+u5q2jIHRleHQtd2hpdGUg57G75ZCN77yM5bm256Gu5L+dIGgyIOagh+etvuW1jOWll+ato+ehriAqL31cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtNHhsIG1iLTggZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICB7dmFyaWFudCA9PT0gXCJsb2dpblwiID8gXCJTaWduIGluXCIgOiBcIlJlZ2lzdGVyXCJ9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgICAgICAgIHt2YXJpYW50ID09PSBcInJlZ2lzdGVyXCIgJiYgKFxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2OiBhbnkpID0+IHNldE5hbWUoZXYudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2OiBhbnkpID0+IHNldEVtYWlsKGV2LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXY6IGFueSkgPT4gc2V0UGFzc3dvcmQoZXYudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZWdpc3Rlcn0gY2xhc3NOYW1lPVwiYmctcmVkLTYwMCBweS0zIHRleHQtd2hpdGUgcm91bmRlZC1tZCB3LWZ1bGwgbXQtMTAgaG92ZXI6YmctcmVkLTcwMCB0cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgIHt2YXJpYW50ID09PSBcImxvZ2luXCIgPyBcIkxvZ2luXCIgOiBcIlNpZ24gdXBcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTUwMCBtdC0xMlwiPlxuICAgICAgICAgICAgICB7dmFyaWFudCA9PT0gXCJsb2dpblwiXG4gICAgICAgICAgICAgICAgPyBcIkZpcnN0IHRpbWUgdXNpbmcgTmV0ZmxpeD9cIlxuICAgICAgICAgICAgICAgIDogXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIn1cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVWYXJpYW50fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWwtMSBob3Zlcjp1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3ZhcmlhbnQgPT09IFwibG9naW5cIiA/IFwiQ3JlYXRlIGFuIGFjY291bnRcIiA6IFwiTG9naW5cIn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aDtcbiJdLCJuYW1lcyI6WyJJbnB1dCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJheGlvcyIsIkF1dGgiLCJlbWFpbCIsInNldEVtYWlsIiwibmFtZSIsInNldE5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidmFyaWFudCIsInNldFZhcmlhbnQiLCJ0b2dnbGVWYXJpYW50IiwiY3VycmVudFZhcmlhbnQiLCJyZWdpc3RlciIsInBvc3QiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsImxhYmVsIiwib25DaGFuZ2UiLCJldiIsInRhcmdldCIsInZhbHVlIiwiaWQiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth.tsx\n"));

/***/ })

});