/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/crud.js":
/*!********************!*\
  !*** ./js/crud.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteRow: () => (/* binding */ deleteRow),\n/* harmony export */   insertRow: () => (/* binding */ insertRow),\n/* harmony export */   updateRow: () => (/* binding */ updateRow)\n/* harmony export */ });\n// task_3/js/crud.js\r\nfunction insertRow(row) {\r\n    console.log('Insert row', row);\r\n    return Math.floor(Math.random() * Math.floor(1000));\r\n  }\r\n  \r\n  function deleteRow(rowId) {\r\n    console.log('Delete row id', rowId);\r\n    return;\r\n  }\r\n  \r\n  function updateRow(rowId, row) {\r\n    console.log(`Update row ${rowId}`, row);\r\n    return rowId;\r\n  }\r\n  \n\n//# sourceURL=webpack://typescript_dependencies/./js/crud.js?");

/***/ }),

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud */ \"./js/crud.js\");\n// task_3/js/main.ts\r\n\r\n// Create a RowElement object\r\nconst row = {\r\n    firstName: 'Guillaume',\r\n    lastName: 'Salva',\r\n};\r\n// Insert the row and store the returned RowID\r\nconst newRowID = _crud__WEBPACK_IMPORTED_MODULE_0__.insertRow(row); // Insert row {firstName: \"Guillaume\", lastName: \"Salva\"}\r\n// Update the row with an age field\r\nconst updatedRow = Object.assign(Object.assign({}, row), { age: 23 });\r\n_crud__WEBPACK_IMPORTED_MODULE_0__.updateRow(newRowID, updatedRow); // Update row {RowID} {firstName: \"Guillaume\", lastName: \"Salva\", age: 23}\r\n// Delete the row using the RowID\r\n_crud__WEBPACK_IMPORTED_MODULE_0__.deleteRow(newRowID); // Delete row id {RowID}\r\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.ts");
/******/ 	
/******/ })()
;