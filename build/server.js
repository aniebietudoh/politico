'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _partyRoute = require('./src/routes/partyRoute');

var _partyRoute2 = _interopRequireDefault(_partyRoute);

var _officeRoute = require('./src/routes/officeRoute');

var _officeRoute2 = _interopRequireDefault(_officeRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ message: 'Welcome to Politico API' });
});

app.listen(port);
console.log('app running on port ', port);

(0, _partyRoute2.default)(app);
(0, _officeRoute2.default)(app);
exports.default = app;