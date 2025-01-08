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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\r\n// Function to sum MajorCredits\r\nfunction sumMajorCredits(subject1, subject2) {\r\n    return {\r\n        credits: subject1.credits + subject2.credits,\r\n        brand: 'major', // Brand to indicate MajorCredits\r\n    };\r\n}\r\n// Function to sum MinorCredits\r\nfunction sumMinorCredits(subject1, subject2) {\r\n    return {\r\n        credits: subject1.credits + subject2.credits,\r\n        brand: 'minor', // Brand to indicate MinorCredits\r\n    };\r\n}\r\n// Example usage of the interfaces and functions\r\nvar major1 = { credits: 5, brand: 'major' };\r\nvar major2 = { credits: 3, brand: 'major' };\r\nvar minor1 = { credits: 2, brand: 'minor' };\r\nvar minor2 = { credits: 1, brand: 'minor' };\r\nvar totalMajorCredits = sumMajorCredits(major1, major2);\r\nvar totalMinorCredits = sumMinorCredits(minor1, minor2);\r\nconsole.log(\"Total Major Credits: \".concat(totalMajorCredits.credits));\r\nconsole.log(\"Total Minor Credits: \".concat(totalMinorCredits.credits));\r\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;