"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault")["default"];
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var app = function app(appName) {
  console.log(appName);
};
app('hello babel！');
var Person = /*#__PURE__*/(0, _createClass2["default"])(function Person() {
  (0, _classCallCheck2["default"])(this, Person);
  console.log('Hello Babel Person!!!');
});
var person1 = new Person();
var asyncFun = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/(0, _regeneratorRuntime2["default"])().mark(function _callee() {
    var res;
    return (0, _regeneratorRuntime2["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log(1);
          _context.next = 3;
          return _promise["default"].resolve(2);
        case 3:
          res = _context.sent;
          console.log(res);
          console.log(3);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function asyncFun() {
    return _ref.apply(this, arguments);
  };
}();
asyncFun();