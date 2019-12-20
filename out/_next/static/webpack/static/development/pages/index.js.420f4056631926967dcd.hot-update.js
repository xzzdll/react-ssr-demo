webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sidebar/index.js":
/*!*************************************!*\
  !*** ./components/sidebar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./components/sidebar/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/api */ "./service/api.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var Head = function Head(_ref) {
  var articals = _ref.articals,
      visitors = _ref.visitors;
  var articalsLength = articals.totalRows || 0;
  var visitorsMount = visitors.count || 0;
  return __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.sideBar
  }, __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.card,
    style: {
      height: '300px'
    }
  }, __jsx("img", {
    src: "/static/20180828144419.jpg",
    alt: ""
  }), __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.word
  }, __jsx("p", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.title
  }, "xzzdll"), __jsx("p", null, " \u524D\u7AEF\u6253\u5B57\u5458"), __jsx("p", null, " \u6587\u7AE0 - ", articalsLength, "\xA0\xA0|\xA0\xA0\u8BBF\u95EE - ", visitorsMount, " "))), __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.card,
    style: {
      height: '100px'
    }
  }, __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.card_head
  }, __jsx("span", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.title
  }, "FOLLOW ME")), __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.icon
  }, __jsx("a", {
    href: "https://github.com/xzzdll",
    target: "_blank"
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "github",
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.iconItem
  })), __jsx("a", {
    href: "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=634408262&website=www.oicqzone.com",
    target: "_blank"
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "qq",
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.iconItem
  })))), __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.card
  }, __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.card_head
  }, __jsx("span", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.title
  }, "\u53CB\u60C5\u94FE\u63A5")), __jsx("div", {
    className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.friendLink
  }, __jsx("a", {
    href: "http://laibh.top",
    target: "_blank"
  }, "\u8D56\u540C\u5B66"), __jsx("a", {
    href: "http://i-tech.tech",
    target: "_blank"
  }, "\u53F6\u8001\u5E08"), __jsx("a", {
    href: "http://www.cnblogs.com/cnyball",
    target: "_blank"
  }, "C++\u5927\u4F6C"), __jsx("a", {
    href: "http://xiaojun1994.top",
    target: "_blank"
  }, "xiaojun"), __jsx("a", {
    href: "https://www.cnblogs.com/DarkInNight/",
    target: "_blank"
  }, "\u56DE\u5FC6\u8E29\u7740\u98CE"))));
};

Head.getInitialProps = function _callee(_ref2) {
  var req, query, userAgent, _Promise$all, _Promise$all2, articals, visitors;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref2.req, query = _ref2.query;
          userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
          _Promise$all = _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(Object(_service_api__WEBPACK_IMPORTED_MODULE_7__["getArticals"])({}), Object(_service_api__WEBPACK_IMPORTED_MODULE_7__["getVisitorMount"])()), _Promise$all2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Promise$all, 2), articals = _Promise$all2[0], visitors = _Promise$all2[1];
          return _context.abrupt("return", {
            articals: articals,
            visitors: visitors
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ })

})
//# sourceMappingURL=index.js.420f4056631926967dcd.hot-update.js.map