'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

require('babel-polyfill');

var _partyRoute = require('./src/routes/partyRoute');

var _partyRoute2 = _interopRequireDefault(_partyRoute);

var _officeRoute = require('./src/routes/officeRoute');

var _officeRoute2 = _interopRequireDefault(_officeRoute);

var _userRoute = require('./src/routes/userRoute');

var _userRoute2 = _interopRequireDefault(_userRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
_dotenv2.default.config();
var app = (0, _express2.default)();

app.use(_express2.default.json());
app.get('/', function (req, res) {
  return res.status(200).send({ message: 'Welcome to politico API' });
});

app.listen(port);
console.log('app running on port ', 3000);

(0, _partyRoute2.default)(app);
(0, _officeRoute2.default)(app);
(0, _userRoute2.default)(app);
exports.default = app;