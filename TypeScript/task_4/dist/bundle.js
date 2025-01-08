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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/subjects/Cpp */ \"./js/subjects/Cpp.ts\");\n/* harmony import */ var _js_subjects_Java__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/subjects/Java */ \"./js/subjects/Java.ts\");\n\r\n\r\nconst cpp = new _js_subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__.Cpp();\r\nconst teacher = { firstName: \"Alice\", lastName: \"Johnson\", experienceTeaching: 5 };\r\ncpp.setTeacher(teacher);\r\nconsole.log(cpp.getAvailableTeacher());\r\nconst java = new _js_subjects_Java__WEBPACK_IMPORTED_MODULE_1__.Java();\r\njava.setTeacher(teacher);\r\nconsole.log(java.getAvailableTeacher());\r\n\n\n//# sourceURL=webpack://typescript_dependencies/./index.ts?");

/***/ }),

/***/ "./js/subjects/Cpp.ts":
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cpp: () => (/* binding */ Cpp)\n/* harmony export */ });\n/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ \"./js/subjects/Subject.ts\");\n // Ensure to import the Subjects namespace\r\nclass Cpp extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subjects.Subject {\r\n    getRequirements() {\r\n        return \"Here are the requirements for Cpp.\";\r\n    }\r\n    getAvailableTeacher() {\r\n        return this.teacher ? `Available teacher: ${this.teacher.firstName}` : \"No available teacher\";\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/subjects/Cpp.ts?");

/***/ }),

/***/ "./js/subjects/Java.ts":
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Java: () => (/* binding */ Java)\n/* harmony export */ });\n/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ \"./js/subjects/Subject.ts\");\n // Ensure to import the Subjects namespace\r\nclass Java extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subjects.Subject {\r\n    getRequirements() {\r\n        return \"Here are the requirements for Java.\";\r\n    }\r\n    getAvailableTeacher() {\r\n        return this.teacher ? `Available teacher: ${this.teacher.firstName}` : \"No available teacher\";\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/subjects/Java.ts?");

/***/ }),

/***/ "./js/subjects/Subject.ts":
/*!********************************!*\
  !*** ./js/subjects/Subject.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Subjects: () => (/* binding */ Subjects)\n/* harmony export */ });\nvar Subjects;\r\n(function (Subjects) {\r\n    class Subject {\r\n        setTeacher(teacher) {\r\n            this.teacher = teacher;\r\n        }\r\n    }\r\n    Subjects.Subject = Subject;\r\n})(Subjects || (Subjects = {}));\r\n // Export the Subjects namespace to make it accessible outside\r\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/subjects/Subject.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;