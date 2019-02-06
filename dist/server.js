'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

require('babel-polyfill');

var _officeController = require('./src/objectsAPI/controllers/officeController');

var _officeController2 = _interopRequireDefault(_officeController);

var _partyController = require('./src/databaseAPI/controllers/partyController');

var _partyController2 = _interopRequireDefault(_partyController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var Party = process.env.TYPE === 'database' ? _partyController2.default : _officeController2.default;
var app = (0, _express2.default)();

app.use(_express2.default.json());
app.get('/', function (req, res) {
  return res.status(200).send({ message: 'Welcome to politico API' });
});

app.post('/api/v1/parties', Party.createParty);
app.get('/api/v1/parties', Party.getAllParty);
app.get('/api/v1/parties/:id', Party.getOneParty);
app.patch('/api/v1/parties/:id', Party.updateParty);
/*
app.delete('/api/v1/parties/:id', Party.deleteParty);

app.post('/api/v1/offices', Office.createOffice);
app.get('/api/v1/offices', Office.getAllOffice);
app.get('/api/v1/offices/:id', Office.getOneOffice);
*/

app.listen(3000);
console.log('app running on port ', 3000);
exports.default = app;