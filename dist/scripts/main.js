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

/***/ "./source/modules/header/index.js":
/*!****************************************!*\
  !*** ./source/modules/header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fixedHeader\": () => (/* binding */ fixedHeader),\n/* harmony export */   \"mobileMenu\": () => (/* binding */ mobileMenu)\n/* harmony export */ });\n // Fixed header\r\nconst fixedHeader = () => {\r\n\t$(window).scroll(function(){\r\n    if ($(this).scrollTop() > 50) {\r\n      $(\".header__desktop, .header__mobile\").addClass(\"is-fixed\")\r\n    } else {\r\n      $(\".header__desktop, .header__mobile\").removeClass(\"is-fixed\")\r\n    }\r\n  });\r\n};\r\n\r\n// Burger menu mobile\r\nconst mobileMenu = () => {\r\n\t$(\".header__burger-button .plates\").on(\"click\", function() {\r\n    $(\".header__mobile\").toggleClass(\"is-active\");\r\n    $(\"body\").toggleClass(\"scroll-block\");\r\n  });\r\n};\n\n//# sourceURL=webpack://gulp-2022/./source/modules/header/index.js?");

/***/ }),

/***/ "./source/scripts/main.js":
/*!********************************!*\
  !*** ./source/scripts/main.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/header/index.js */ \"./source/modules/header/index.js\");\n// import WOW from \"wow\";\r\n\r\n\r\n(function () {\r\n  // wow\r\n\t// new WOW().init();\r\n\r\n  // iziModal\r\n  // $(\".modal\").iziModal({\r\n  //   transitionIn: 'fadeInDown',\r\n  //   bodyOverflow: true\r\n  // });\r\n  \r\n  (0,_modules_header_index_js__WEBPACK_IMPORTED_MODULE_0__.fixedHeader)();\r\n  (0,_modules_header_index_js__WEBPACK_IMPORTED_MODULE_0__.mobileMenu)();\r\n})();\n\n//# sourceURL=webpack://gulp-2022/./source/scripts/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./source/scripts/main.js");
/******/ 	
/******/ })()
;