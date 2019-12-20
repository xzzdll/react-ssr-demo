webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home */ "./components/home.js");
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/api */ "./service/api.js");




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var home = function home(_ref) {
  var articals = _ref.articals,
      visitors = _ref.visitors,
      userAgent = _ref.userAgent;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
    articalsLength: articals.totalRows || 0,
    visitorsMount: visitors.count || 0,
    userAgent: userAgent
  }, __jsx(_components_home__WEBPACK_IMPORTED_MODULE_5__["default"], {
    articals: articals
  })));
};

home.getInitialProps = function _callee(_ref2) {
  var req, query, userAgent, _query$currentPage, currentPage, _query$pageSize, pageSize, _ref3, _ref4, articals, visitors;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref2.req, query = _ref2.query;
          userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
          _query$currentPage = query.currentPage, currentPage = _query$currentPage === void 0 ? 1 : _query$currentPage, _query$pageSize = query.pageSize, pageSize = _query$pageSize === void 0 ? 10 : _query$pageSize;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(Object(_service_api__WEBPACK_IMPORTED_MODULE_6__["getArticals"])({
            currentPage: currentPage,
            pageSize: pageSize
          }), Object(_service_api__WEBPACK_IMPORTED_MODULE_6__["getVisitorMount"])()));

        case 5:
          _ref3 = _context.sent;
          _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, 2);
          articals = _ref4[0];
          visitors = _ref4[1];
          return _context.abrupt("return", {
            articals: articals,
            visitors: visitors,
            userAgent: userAgent
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (home);

/***/ })

})
//# sourceMappingURL=index.js.43b2e8f838c673f32566.hot-update.js.map