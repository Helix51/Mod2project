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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/dist/web3.min.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _artifacts_contracts_SimpleWallet_sol_SimpleWallet_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/SimpleWallet.sol/SimpleWallet.json */ \"./artifacts/contracts/SimpleWallet.sol/SimpleWallet.json\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SimpleWallet = (param)=>{\n    let { address  } = param;\n    _s();\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [transferAddress, setTransferAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [transferAmount, setTransferAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [userAddress, setUserAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.ethereum ? ethereum.request({\n            method: \"eth_requestAccounts\"\n        }).then((accounts)=>{\n            setUserAddress(accounts[0]);\n            let w3 = new (web3__WEBPACK_IMPORTED_MODULE_2___default())(ethereum);\n            setWeb3(w3);\n        }).catch((err)=>console.log(err)) : console.log(\"Please install MetaMask\");\n        contract ? setContract(new web3.eth.Contract(_artifacts_contracts_SimpleWallet_sol_SimpleWallet_json__WEBPACK_IMPORTED_MODULE_3__.abi, address)) : console.log(\"Error setting contract\");\n    }, []);\n    const transfer = async ()=>{\n        await contract.methods.transfer(transferAddress, transferAmount).send({\n            from: web3.eth.defaultAccount\n        });\n        const balance = await contract.methods.balanceOf(web3.eth.defaultAccount).call();\n        setBalance(balance);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: web3 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Balance: \",\n                        balance,\n                        \" ETH\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Christopher\\\\Desktop\\\\SCM-Starter-Modified\\\\pages\\\\index.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Recipient address\",\n                    value: transferAddress,\n                    onChange: (e)=>setTransferAddress(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Christopher\\\\Desktop\\\\SCM-Starter-Modified\\\\pages\\\\index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    placeholder: \"Amount\",\n                    value: transferAmount,\n                    onChange: (e)=>setTransferAmount(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Christopher\\\\Desktop\\\\SCM-Starter-Modified\\\\pages\\\\index.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: transfer,\n                    children: \"Transfer\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Christopher\\\\Desktop\\\\SCM-Starter-Modified\\\\pages\\\\index.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Christopher\\\\Desktop\\\\SCM-Starter-Modified\\\\pages\\\\index.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: '\"Please Install Metamask\"'\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Christopher\\\\Desktop\\\\SCM-Starter-Modified\\\\pages\\\\index.js\",\n            lineNumber: 41,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Christopher\\\\Desktop\\\\SCM-Starter-Modified\\\\pages\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SimpleWallet, \"Ybdfojp7qIDY1c2/RvE9BPumaV8=\");\n_c = SimpleWallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SimpleWallet, {\n        address: \"0x5FbDB2315678afecb367f032d93F642f64180aa3\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Christopher\\\\Desktop\\\\SCM-Starter-Modified\\\\pages\\\\index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined));\nvar _c;\n$RefreshReg$(_c, \"SimpleWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQzNCO0FBQ2dFO0FBRXhGLE1BQU1LLGVBQWUsU0FBaUI7UUFBaEIsRUFBRUMsUUFBTyxFQUFFOztJQUMvQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxpQkFBaUJDLG1CQUFtQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNVLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQ2M7SUFDakMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQ2M7SUFDL0MsTUFBTSxDQUFDRyxVQUFVQyxZQUFZLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNka0IsT0FBT0MsUUFBUSxHQUNiQSxTQUFTQyxPQUFPLENBQUM7WUFBRUMsUUFBUTtRQUFzQixHQUFHQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNyRVIsZUFBZVEsUUFBUSxDQUFDLEVBQUU7WUFDMUIsSUFBSUMsS0FBSyxJQUFJdkIsNkNBQUlBLENBQUNrQjtZQUNsQlAsUUFBUVk7UUFDVixHQUFHQyxLQUFLLENBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsR0FBRyxDQUFDRixRQUM5QkMsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQjtRQUN4Q1osV0FDRUMsWUFBWSxJQUFJTixLQUFLa0IsR0FBRyxDQUFDQyxRQUFRLENBQUM1Qix3RkFBbUIsRUFBRUUsWUFDckR1QixRQUFRQyxHQUFHLENBQUMseUJBQXlCO0lBQzNDLEdBQUcsRUFBRTtJQUVMLE1BQU1JLFdBQVcsVUFBWTtRQUMzQixNQUFNaEIsU0FBU2lCLE9BQU8sQ0FBQ0QsUUFBUSxDQUFDekIsaUJBQWlCRSxnQkFBZ0J5QixJQUFJLENBQUM7WUFBRUMsTUFBTXhCLEtBQUtrQixHQUFHLENBQUNPLGNBQWM7UUFBQztRQUN0RyxNQUFNL0IsVUFBVSxNQUFNVyxTQUFTaUIsT0FBTyxDQUFDSSxTQUFTLENBQUMxQixLQUFLa0IsR0FBRyxDQUFDTyxjQUFjLEVBQUVFLElBQUk7UUFDOUVoQyxXQUFXRDtJQUNiO0lBRUEscUJBQ0UsOERBQUNrQztrQkFDQTVCLHFCQUNDLDhEQUFDNEI7OzhCQUNDLDhEQUFDQzs7d0JBQUU7d0JBQVVuQzt3QkFBUTs7Ozs7Ozs4QkFDckIsOERBQUNvQztvQkFBTUMsTUFBSztvQkFBT0MsYUFBWTtvQkFBb0JDLE9BQU9yQztvQkFBaUJzQyxVQUFVLENBQUNDLElBQU10QyxtQkFBbUJzQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs4QkFDN0gsOERBQUNIO29CQUFNQyxNQUFLO29CQUFTQyxhQUFZO29CQUFTQyxPQUFPbkM7b0JBQWdCb0MsVUFBVSxDQUFDQyxJQUFNcEMsa0JBQWtCb0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7OEJBQ2xILDhEQUFDSTtvQkFBT0MsU0FBU2pCOzhCQUFVOzs7Ozs7Ozs7OztzQ0FFM0IsOERBQUNRO3NCQUFFOzs7OztxQkFBNkI7Ozs7OztBQUl4QztHQXhDTXJDO0tBQUFBO0FBMENOLCtEQUFlLGtCQUNYLDhEQUFDQTtRQUNDQyxTQUFROzs7OztpQkFFZCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5pbXBvcnQgU2ltcGxlV2FsbGV0QUJJIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL1NpbXBsZVdhbGxldC5zb2wvU2ltcGxlV2FsbGV0Lmpzb25cIjtcblxuY29uc3QgU2ltcGxlV2FsbGV0ID0gKHsgYWRkcmVzcyB9KSA9PiB7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdHJhbnNmZXJBZGRyZXNzLCBzZXRUcmFuc2ZlckFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0cmFuc2ZlckFtb3VudCwgc2V0VHJhbnNmZXJBbW91bnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgY29uc3QgW3VzZXJBZGRyZXNzLCBzZXRVc2VyQWRkcmVzc10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmV0aGVyZXVtID9cbiAgICAgIGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pLnRoZW4oKGFjY291bnRzKSA9PiB7XG4gICAgICAgIHNldFVzZXJBZGRyZXNzKGFjY291bnRzWzBdKVxuICAgICAgICBsZXQgdzMgPSBuZXcgV2ViMyhldGhlcmV1bSlcbiAgICAgICAgc2V0V2ViMyh3MylcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgOiBjb25zb2xlLmxvZyhcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpXG4gICAgY29udHJhY3QgPyBcbiAgICAgIHNldENvbnRyYWN0KG5ldyB3ZWIzLmV0aC5Db250cmFjdChTaW1wbGVXYWxsZXRBQkkuYWJpLCBhZGRyZXNzKSlcbiAgICAgIDogY29uc29sZS5sb2coXCJFcnJvciBzZXR0aW5nIGNvbnRyYWN0XCIpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHRyYW5zZmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMudHJhbnNmZXIodHJhbnNmZXJBZGRyZXNzLCB0cmFuc2ZlckFtb3VudCkuc2VuZCh7IGZyb206IHdlYjMuZXRoLmRlZmF1bHRBY2NvdW50IH0pO1xuICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmJhbGFuY2VPZih3ZWIzLmV0aC5kZWZhdWx0QWNjb3VudCkuY2FsbCgpO1xuICAgIHNldEJhbGFuY2UoYmFsYW5jZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIHt3ZWIzID9cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPkJhbGFuY2U6IHtiYWxhbmNlfSBFVEg8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUmVjaXBpZW50IGFkZHJlc3NcIiB2YWx1ZT17dHJhbnNmZXJBZGRyZXNzfSBvbkNoYW5nZT17KGUpID0+IHNldFRyYW5zZmVyQWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJBbW91bnRcIiB2YWx1ZT17dHJhbnNmZXJBbW91bnR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VHJhbnNmZXJBbW91bnQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RyYW5zZmVyfT5UcmFuc2ZlcjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA6IDxwPlwiUGxlYXNlIEluc3RhbGwgTWV0YW1hc2tcIjwvcD5cbiAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gICAgPFNpbXBsZVdhbGxldFxuICAgICAgYWRkcmVzcz1cIjB4NUZiREIyMzE1Njc4YWZlY2IzNjdmMDMyZDkzRjY0MmY2NDE4MGFhM1wiXG4gICAgLz5cbik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXZWIzIiwiU2ltcGxlV2FsbGV0QUJJIiwiU2ltcGxlV2FsbGV0IiwiYWRkcmVzcyIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwidHJhbnNmZXJBZGRyZXNzIiwic2V0VHJhbnNmZXJBZGRyZXNzIiwidHJhbnNmZXJBbW91bnQiLCJzZXRUcmFuc2ZlckFtb3VudCIsIndlYjMiLCJzZXRXZWIzIiwidW5kZWZpbmVkIiwidXNlckFkZHJlc3MiLCJzZXRVc2VyQWRkcmVzcyIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJ0aGVuIiwiYWNjb3VudHMiLCJ3MyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImV0aCIsIkNvbnRyYWN0IiwiYWJpIiwidHJhbnNmZXIiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJkZWZhdWx0QWNjb3VudCIsImJhbGFuY2VPZiIsImNhbGwiLCJkaXYiLCJwIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});