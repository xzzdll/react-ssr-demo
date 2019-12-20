webpackHotUpdate("styles",{

/***/ "./less/artical.less":
/*!***************************!*\
  !*** ./less/artical.less ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"articalCard":"taRltSG6wzUkJYjZHPbRt","articalCardTitle":"_2AoDcuXDNQ9FwEvK84I5Li","articalCardSubTitle":"S1FMLpscdylXZrYFSp3wF","articalCardBody":"_14T-97C63CaDDPbrwdMb13","articalCardfoot":"_11AWW_xeiHKVZX-hpxpGnd"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1576840083396");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.f67b3b98774a8aff2e07.hot-update.js.map