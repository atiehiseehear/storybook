"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _App = require("./App");
Object.keys(_App).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _App[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _App[key];
    }
  });
});