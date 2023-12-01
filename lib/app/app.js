(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "react-dom"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("react-dom"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.reactDom);
    global.app = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _reactDom) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _reactDom = _interopRequireDefault(_reactDom);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  var app = function app(_ref) {
    var appName = _ref.appName;
    return dom("div", null, appName);
  };
  _reactDom["default"].render(dom(Hello, {
    appName: "react jsx"
  }), document.getElementById('app'));
});