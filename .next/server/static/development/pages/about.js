module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/media/nova/A800149E00147612/platzi/frontEndReact/next.js/pages/about.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(\"div\", {\n  className: \"jsx-2250409192\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }\n}, __jsx(\"img\", {\n  src: \"/platzi-logo.webp\",\n  alt: \"\",\n  className: \"jsx-2250409192\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 7\n  }\n}), __jsx(\"h3\", {\n  className: \"jsx-2250409192\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 7\n  }\n}, \"CREADO POR YO\"), __jsx(\"h5\", {\n  className: \"jsx-2250409192\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 7\n  }\n}, \"DIEGO ANDRES GUZMAN\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  id: \"2599672780\",\n  __self: undefined\n}, \"div.jsx-2250409192{background-color:#1c3643;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;bottom:0px;top:0;left:0px;right:0px;padding-bottom:.2rem;color:white;}img.jsx-2250409192{width:250px;margin:5rem auto 2rem auto;}h3.jsx-2250409192{text-align:center;font-weight:bold;}h5.jsx-2250409192{text-align:center;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ub3ZhL0E4MDAxNDlFMDAxNDc2MTIvcGxhdHppL2Zyb250RW5kUmVhY3QvbmV4dC5qcy9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRa0IsQUFHbUMsQUFZWixBQUtNLEFBTXJCLFlBVitCLE1BS1gsQUFLbkIsT0F0QmUsVUFtQmYsSUFOQSw0REFad0IsOEVBQ0osa0JBQ1AsV0FDTixNQUNJLFNBQ0MsVUFDVyxxQkFDVixZQUNiIiwiZmlsZSI6Ii9tZWRpYS9ub3ZhL0E4MDAxNDlFMDAxNDc2MTIvcGxhdHppL2Zyb250RW5kUmVhY3QvbmV4dC5qcy9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpPT4oXG4gICAgPGRpdj5cbiAgICAgIDxpbWcgc3JjPVwiL3BsYXR6aS1sb2dvLndlYnBcIiBhbHQ9XCJcIi8+XG4gICAgICA8aDM+Q1JFQURPIFBPUiBZTzwvaDM+XG4gICAgICA8aDU+RElFR08gQU5EUkVTIEdVWk1BTjwvaDU+XG4gICAgICBcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzFjMzY0MztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIHRvcDowO1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICByaWdodDowcHggO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuMnJlbTtcbiAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgIG1hcmdpbjogNXJlbSBhdXRvIDJyZW0gYXV0byA7XG4gICAgICAgIH1cbiAgICAgICAgaDN7XG5cbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBoNXtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgKnsgIFxuICAgICAgICBcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDsgXG4gICAgICAgIH1cbiAgICAgICAgYm9keXtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmLCBBcmlhbDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PiAgICBcbiAgKSJdfQ== */\\n/*@ sourceURL=/media/nova/A800149E00147612/platzi/frontEndReact/next.js/pages/about.js */\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  id: \"1091187693\",\n  __self: undefined\n}, \"*{margin:0;padding:0;}body{font-family:'Lato',sans-serif,Arial;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ub3ZhL0E4MDAxNDlFMDAxNDc2MTIvcGxhdHppL2Zyb250RW5kUmVhY3QvbmV4dC5qcy9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3lCLEFBSW9CLEFBSTZCLFNBSDVCLFVBQ1osaUJBR0EiLCJmaWxlIjoiL21lZGlhL25vdmEvQTgwMDE0OUUwMDE0NzYxMi9wbGF0emkvZnJvbnRFbmRSZWFjdC9uZXh0LmpzL3BhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCk9PihcbiAgICA8ZGl2PlxuICAgICAgPGltZyBzcmM9XCIvcGxhdHppLWxvZ28ud2VicFwiIGFsdD1cIlwiLz5cbiAgICAgIDxoMz5DUkVBRE8gUE9SIFlPPC9oMz5cbiAgICAgIDxoNT5ESUVHTyBBTkRSRVMgR1VaTUFOPC9oNT5cbiAgICAgIFxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMWMzNjQzO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHJpZ2h0OjBweCA7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IC4ycmVtO1xuICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgbWFyZ2luOiA1cmVtIGF1dG8gMnJlbSBhdXRvIDtcbiAgICAgICAgfVxuICAgICAgICBoM3tcblxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGg1e1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAqeyAgXG4gICAgICAgIFxuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwOyBcbiAgICAgICAgfVxuICAgICAgICBib2R5e1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWYsIEFyaWFsO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+ICAgIFxuICApIl19 */\\n/*@ sourceURL=/media/nova/A800149E00147612/platzi/frontEndReact/next.js/pages/about.js */\")));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxxRUFDWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLEtBQUcsRUFBQyxtQkFBVDtBQUE2QixLQUFHLEVBQUMsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsKzJEQURKIiwiZmlsZSI6Ii4vcGFnZXMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoKT0+KFxuICAgIDxkaXY+XG4gICAgICA8aW1nIHNyYz1cIi9wbGF0emktbG9nby53ZWJwXCIgYWx0PVwiXCIvPlxuICAgICAgPGgzPkNSRUFETyBQT1IgWU88L2gzPlxuICAgICAgPGg1PkRJRUdPIEFORFJFUyBHVVpNQU48L2g1PlxuICAgICAgXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxYzM2NDM7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgcmlnaHQ6MHB4IDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjJyZW07XG4gICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgaW1ne1xuICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICBtYXJnaW46IDVyZW0gYXV0byAycmVtIGF1dG8gO1xuICAgICAgICB9XG4gICAgICAgIGgze1xuXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaDV7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICp7ICBcbiAgICAgICAgXG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7IFxuICAgICAgICB9XG4gICAgICAgIGJvZHl7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZiwgQXJpYWw7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj4gICAgXG4gICkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/nova/A800149E00147612/platzi/frontEndReact/next.js/pages/about.js */"./pages/about.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });