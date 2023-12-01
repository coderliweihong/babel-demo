"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard")["default"];
var React = _interopRequireWildcard(require("react"));
var ReactDOM = _interopRequireWildcard(require("react-dom"));
var _Hello = require("./Hello");
ReactDOM.render(dom(_Hello.Hello, {
  compiler: "TypeScript",
  framework: "React"
}), document.getElementById("app"));