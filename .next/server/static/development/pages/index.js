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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/media/nova/A800149E00147612/platzi/frontEndReact/next.js/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(\"div\", {\n  className: \"jsx-3566165926\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 3\n  }\n}, __jsx(\"img\", {\n  src: \"/platzi-logo.webp\",\n  alt: \"\",\n  className: \"jsx-3566165926\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}), __jsx(\"h1\", {\n  className: \"jsx-3566165926\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}, \"PLATZI\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  id: \"2619146468\",\n  __self: undefined\n}, \"div.jsx-3566165926{background-color:#1c3643;width:100%;margin:0;padding:.5rem 1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:end;-ms-flex-pack:end;justify-content:end;}h1.jsx-3566165926{margin-left:.6rem;color:white;}img.jsx-3566165926{width:40px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ub3ZhL0E4MDAxNDlFMDAxNDc2MTIvcGxhdHppL2Zyb250RW5kUmVhY3QvbmV4dC5qcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNYyxBQUlnQyxBQVNQLEFBSVAsV0FDYixPQUphLE9BVEEsS0FVYixNQVRXLFNBQ1UsbUJBQ04sMEVBQ00sNkZBRXRCLHVGQUFDIiwiZmlsZSI6Ii9tZWRpYS9ub3ZhL0E4MDAxNDlFMDAxNDc2MTIvcGxhdHppL2Zyb250RW5kUmVhY3QvbmV4dC5qcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpPT4oXG4gIDxkaXY+XG4gICAgPGltZyBzcmM9XCIvcGxhdHppLWxvZ28ud2VicFwiIGFsdD1cIlwiLz5cbiAgICA8aDE+UExBVFpJPC9oMT5cbiAgPHN0eWxlIGpzeD57YFxuXG4gICAgZGl2e1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMzY0MztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBlbmRcbiAgICB9XG4gICAgaDF7XG4gICAgICBtYXJnaW4tbGVmdDogLjZyZW07XG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICp7ICBcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwOyBcbiAgICAgIH1cbiAgICAgIGJvZHl7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWYsIEFyaWFsO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\\n/*@ sourceURL=/media/nova/A800149E00147612/platzi/frontEndReact/next.js/pages/index.js */\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  id: \"2081544843\",\n  __self: undefined\n}, \"*{margin:0;padding:0;}body{font-family:'Lato',sans-serif,Arial;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9ub3ZhL0E4MDAxNDlFMDAxNDc2MTIvcGxhdHppL2Zyb250RW5kUmVhY3QvbmV4dC5qcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QnVCLEFBR2tCLEFBSTZCLFNBSDVCLFVBQ1osaUJBR0EiLCJmaWxlIjoiL21lZGlhL25vdmEvQTgwMDE0OUUwMDE0NzYxMi9wbGF0emkvZnJvbnRFbmRSZWFjdC9uZXh0LmpzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCk9PihcbiAgPGRpdj5cbiAgICA8aW1nIHNyYz1cIi9wbGF0emktbG9nby53ZWJwXCIgYWx0PVwiXCIvPlxuICAgIDxoMT5QTEFUWkk8L2gxPlxuICA8c3R5bGUganN4PntgXG5cbiAgICBkaXZ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMzNjQzO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZFxuICAgIH1cbiAgICBoMXtcbiAgICAgIG1hcmdpbi1sZWZ0OiAuNnJlbTtcbiAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgKnsgIFxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7IFxuICAgICAgfVxuICAgICAgYm9keXtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZiwgQXJpYWw7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */\\n/*@ sourceURL=/media/nova/A800149E00147612/platzi/frontEndReact/next.js/pages/index.js */\")));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxxRUFDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFLLEtBQUcsRUFBQyxtQkFBVDtBQUE2QixLQUFHLEVBQUMsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtNkNBREYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpPT4oXG4gIDxkaXY+XG4gICAgPGltZyBzcmM9XCIvcGxhdHppLWxvZ28ud2VicFwiIGFsdD1cIlwiLz5cbiAgICA8aDE+UExBVFpJPC9oMT5cbiAgPHN0eWxlIGpzeD57YFxuXG4gICAgZGl2e1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMzY0MztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBlbmRcbiAgICB9XG4gICAgaDF7XG4gICAgICBtYXJnaW4tbGVmdDogLjZyZW07XG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICp7ICBcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwOyBcbiAgICAgIH1cbiAgICAgIGJvZHl7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWYsIEFyaWFsO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/nova/A800149E00147612/platzi/frontEndReact/next.js/pages/index.js */"./pages/index.js");


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