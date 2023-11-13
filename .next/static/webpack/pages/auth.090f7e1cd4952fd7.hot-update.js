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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Input */ \"./components/Input.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Auth = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [variant, setVariant] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"login\");\n    const toggleVariant = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        setVariant((currentVariant)=>currentVariant === \"login\" ? \"register\" : \"login\");\n    }, []);\n    /** 在auth.tsx中添加注册功能:\n  使用useCallback钩子来定义一个名为register的函数，该函数是异步的，表示它会进行一些可能耗时的操作（比如网络请求）。\n  这个register函数使用axios发送一个POST请求到/api/register端点，并带上用户的邮箱、名字和密码。\n  如果请求失败，它会捕获错误并将其打印到控制台。\n  这个函数依赖于email、name和password变量，这些变量是在用户界面中收集的。*/ const register = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/register\", {\n                email,\n                name,\n                password\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    }, [\n        email,\n        name,\n        password\n    ]);\n    //create login function\n    const login = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{\n        try {\n            await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"credentials\", {\n                email,\n                password,\n                redirect: false,\n                callbackUrl: \"/\"\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    }, [\n        email,\n        password\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black bg-opacity-50 w-full h-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"px-12 py-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/logo.png\",\n                        alt: \"Logo\",\n                        className: \"h-12\"\n                    }, void 0, false, {\n                        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-black bg-opacity-70 px-16 py-16 self-center mt-2 w-2/5 max-w-md rounded-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-white text-4xl mb-8 font-semibold\",\n                                children: variant === \"login\" ? \"Sign in\" : \"Register\"\n                            }, void 0, false, {\n                                fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-4\",\n                                children: [\n                                    variant === \"register\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        label: \"Username\",\n                                        onChange: (ev)=>setName(ev.target.value),\n                                        id: \"name\",\n                                        value: name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        label: \"Email\",\n                                        onChange: (ev)=>setEmail(ev.target.value),\n                                        id: \"email\",\n                                        type: \"email\",\n                                        value: email\n                                    }, void 0, false, {\n                                        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        label: \"Password\",\n                                        onChange: (ev)=>setPassword(ev.target.value),\n                                        id: \"password\",\n                                        type: \"password\",\n                                        value: password\n                                    }, void 0, false, {\n                                        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: register,\n                                className: \"bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition\",\n                                children: variant === \"login\" ? \"Login\" : \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-neutral-500 mt-12\",\n                                children: [\n                                    variant === \"login\" ? \"First time using Netflix?\" : \"Already have an account?\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: toggleVariant,\n                                        className: \"text-white ml-1 hover:underline cursor-pointer\",\n                                        children: variant === \"login\" ? \"Create an account\" : \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/xzl/Desktop/netflix-zilin/pages/auth.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Auth, \"qNXO6X/ogtSB305GaYSxByy4fV8=\");\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNPO0FBQ3BCO0FBQ2E7QUFFdkMsTUFBTUssT0FBTzs7SUFDWCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVksZ0JBQWdCYixrREFBV0EsQ0FBQztRQUNoQ1ksV0FBVyxDQUFDRSxpQkFDVkEsbUJBQW1CLFVBQVUsYUFBYTtJQUU5QyxHQUFHLEVBQUU7SUFFTDs7Ozs4Q0FJNEMsR0FDNUMsTUFBTUMsV0FBV2Ysa0RBQVdBLENBQUM7UUFDM0IsSUFBSTtZQUNGLE1BQU1FLGtEQUFVLENBQUMsaUJBQWlCO2dCQUNoQ0c7Z0JBQ0FFO2dCQUNBRTtZQUNGO1FBQ0YsRUFBRSxPQUFPUSxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGLEdBQUc7UUFBQ1o7UUFBT0U7UUFBTUU7S0FBUztJQUUxQix1QkFBdUI7SUFDdkIsTUFBTVcsUUFBUXBCLGtEQUFXQSxDQUFDO1FBQ3hCLElBQUc7WUFDRCxNQUFNRyx1REFBTUEsQ0FBQyxlQUFlO2dCQUMxQkU7Z0JBQ0FJO2dCQUNBWSxVQUFVO2dCQUNWQyxhQUFhO1lBQ2Y7UUFDRixFQUFDLE9BQU9MLE9BQU07WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0YsR0FBRztRQUFDWjtRQUFPSTtLQUFTO0lBRXBCLHFCQUNFLDhEQUFDYztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNFO3dCQUFJQyxLQUFJO3dCQUFtQkMsS0FBSTt3QkFBT0osV0FBVTs7Ozs7Ozs7Ozs7OEJBR25ELDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFFYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUViLDhEQUFDSztnQ0FBR0wsV0FBVTswQ0FDWGIsWUFBWSxVQUFVLFlBQVk7Ozs7OzswQ0FFckMsOERBQUNZO2dDQUFJQyxXQUFVOztvQ0FDWmIsWUFBWSw0QkFDWCw4REFBQ1oseURBQUtBO3dDQUNKK0IsT0FBTTt3Q0FDTkMsVUFBVSxDQUFDQyxLQUFZeEIsUUFBUXdCLEdBQUdDLE1BQU0sQ0FBQ0MsS0FBSzt3Q0FDOUNDLElBQUc7d0NBQ0hELE9BQU8zQjs7Ozs7O2tEQUdYLDhEQUFDUix5REFBS0E7d0NBQ0orQixPQUFNO3dDQUNOQyxVQUFVLENBQUNDLEtBQVkxQixTQUFTMEIsR0FBR0MsTUFBTSxDQUFDQyxLQUFLO3dDQUMvQ0MsSUFBRzt3Q0FDSEMsTUFBSzt3Q0FDTEYsT0FBTzdCOzs7Ozs7a0RBRVQsOERBQUNOLHlEQUFLQTt3Q0FDSitCLE9BQU07d0NBQ05DLFVBQVUsQ0FBQ0MsS0FBWXRCLFlBQVlzQixHQUFHQyxNQUFNLENBQUNDLEtBQUs7d0NBQ2xEQyxJQUFHO3dDQUNIQyxNQUFLO3dDQUNMRixPQUFPekI7Ozs7Ozs7Ozs7OzswQ0FHWCw4REFBQzRCO2dDQUNDQyxTQUFTdkI7Z0NBQ1RTLFdBQVU7MENBRVRiLFlBQVksVUFBVSxVQUFVOzs7Ozs7MENBRW5DLDhEQUFDNEI7Z0NBQUVmLFdBQVU7O29DQUNWYixZQUFZLFVBQ1QsOEJBQ0E7a0RBQ0osOERBQUM2Qjt3Q0FDQ0YsU0FBU3pCO3dDQUNUVyxXQUFVO2tEQUVUYixZQUFZLFVBQVUsc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTdEO0dBeEdNUDtLQUFBQTtBQTBHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hdXRoLnRzeD80MWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dCBmcm9tIFwiQC9jb21wb25lbnRzL0lucHV0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7c2lnbklufSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5jb25zdCBBdXRoID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBbdmFyaWFudCwgc2V0VmFyaWFudF0gPSB1c2VTdGF0ZShcImxvZ2luXCIpO1xuXG4gIGNvbnN0IHRvZ2dsZVZhcmlhbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0VmFyaWFudCgoY3VycmVudFZhcmlhbnQpID0+XG4gICAgICBjdXJyZW50VmFyaWFudCA9PT0gXCJsb2dpblwiID8gXCJyZWdpc3RlclwiIDogXCJsb2dpblwiXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIC8qKiDlnKhhdXRoLnRzeOS4rea3u+WKoOazqOWGjOWKn+iDvTpcbiAg5L2/55SodXNlQ2FsbGJhY2vpkqnlrZDmnaXlrprkuYnkuIDkuKrlkI3kuLpyZWdpc3RlcueahOWHveaVsO+8jOivpeWHveaVsOaYr+W8guatpeeahO+8jOihqOekuuWug+S8mui/m+ihjOS4gOS6m+WPr+iDveiAl+aXtueahOaTjeS9nO+8iOavlOWmgue9kee7nOivt+axgu+8ieOAglxuICDov5nkuKpyZWdpc3RlcuWHveaVsOS9v+eUqGF4aW9z5Y+R6YCB5LiA5LiqUE9TVOivt+axguWIsC9hcGkvcmVnaXN0ZXLnq6/ngrnvvIzlubbluKbkuIrnlKjmiLfnmoTpgq7nrrHjgIHlkI3lrZflkozlr4bnoIHjgIJcbiAg5aaC5p6c6K+35rGC5aSx6LSl77yM5a6D5Lya5o2V6I636ZSZ6K+v5bm25bCG5YW25omT5Y2w5Yiw5o6n5Yi25Y+w44CCXG4gIOi/meS4quWHveaVsOS+nei1luS6jmVtYWls44CBbmFtZeWSjHBhc3N3b3Jk5Y+Y6YeP77yM6L+Z5Lqb5Y+Y6YeP5piv5Zyo55So5oi355WM6Z2i5Lit5pS26ZuG55qE44CCKi9cbiAgY29uc3QgcmVnaXN0ZXIgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3JlZ2lzdGVyXCIsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH0sIFtlbWFpbCwgbmFtZSwgcGFzc3dvcmRdKTtcblxuICAvL2NyZWF0ZSBsb2dpbiBmdW5jdGlvblxuICBjb25zdCBsb2dpbiA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICB0cnl7XG4gICAgICBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgY2FsbGJhY2tVcmw6ICcvJ1xuICAgICAgfSk7XG4gICAgfWNhdGNoIChlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgYmctW3VybCgnL2ltYWdlcy9oZXJvLmpwZycpXSBiZy1uby1yZXBlYXQgYmctY2VudGVyIGJnLWZpeGVkIGJnLWNvdmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIGJnLW9wYWNpdHktNTAgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInB4LTEyIHB5LTVcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgY2xhc3NOYW1lPVwiaC0xMlwiIC8+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHsvKiDljIXlkKsgXCJTaWduIGluXCIg55qEIGRpdiDlupTor6XltYzlpZflnKjmraQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBiZy1vcGFjaXR5LTcwIHB4LTE2IHB5LTE2IHNlbGYtY2VudGVyIG10LTIgdy0yLzUgbWF4LXctbWQgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgey8qIOS/ruatoyB0ZXh0LXdoaXRlIOexu+WQje+8jOW5tuehruS/nSBoMiDmoIfnrb7ltYzlpZfmraPnoa4gKi99XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTR4bCBtYi04IGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAge3ZhcmlhbnQgPT09IFwibG9naW5cIiA/IFwiU2lnbiBpblwiIDogXCJSZWdpc3RlclwifVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICAgICAgICB7dmFyaWFudCA9PT0gXCJyZWdpc3RlclwiICYmIChcbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldjogYW55KSA9PiBzZXROYW1lKGV2LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldjogYW55KSA9PiBzZXRFbWFpbChldi50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2OiBhbnkpID0+IHNldFBhc3N3b3JkKGV2LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC02MDAgcHktMyB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgdy1mdWxsIG10LTEwIGhvdmVyOmJnLXJlZC03MDAgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt2YXJpYW50ID09PSBcImxvZ2luXCIgPyBcIkxvZ2luXCIgOiBcIlNpZ24gdXBcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTUwMCBtdC0xMlwiPlxuICAgICAgICAgICAgICB7dmFyaWFudCA9PT0gXCJsb2dpblwiXG4gICAgICAgICAgICAgICAgPyBcIkZpcnN0IHRpbWUgdXNpbmcgTmV0ZmxpeD9cIlxuICAgICAgICAgICAgICAgIDogXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIn1cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVWYXJpYW50fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWwtMSBob3Zlcjp1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3ZhcmlhbnQgPT09IFwibG9naW5cIiA/IFwiQ3JlYXRlIGFuIGFjY291bnRcIiA6IFwiTG9naW5cIn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aDtcbiJdLCJuYW1lcyI6WyJJbnB1dCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJheGlvcyIsInNpZ25JbiIsIkF1dGgiLCJlbWFpbCIsInNldEVtYWlsIiwibmFtZSIsInNldE5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidmFyaWFudCIsInNldFZhcmlhbnQiLCJ0b2dnbGVWYXJpYW50IiwiY3VycmVudFZhcmlhbnQiLCJyZWdpc3RlciIsInBvc3QiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsInJlZGlyZWN0IiwiY2FsbGJhY2tVcmwiLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsImxhYmVsIiwib25DaGFuZ2UiLCJldiIsInRhcmdldCIsInZhbHVlIiwiaWQiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth.tsx\n"));

/***/ })

});