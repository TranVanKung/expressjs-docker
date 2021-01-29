"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 4000;
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.get("/", function (req, res) {
  res.send("Hello world");
});
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});
