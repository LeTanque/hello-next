webpackHotUpdate("static/development/pages/notes.js",{

/***/ "./pages/notes.jsx":
/*!*************************!*\
  !*** ./pages/notes.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Note_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Note.jsx */ "./components/Note.jsx");
var _jsxFileName = "/Users/tank/git/hello-next/pages/notes.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Notes = function Notes(props) {
  console.log(props);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.notes ? props.notes.map(function (noteObject, index) {
    return __jsx(_components_Note_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      noteObject: noteObject,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Notes);

/***/ })

})
//# sourceMappingURL=notes.js.fcfce8b81b70754572e3.hot-update.js.map