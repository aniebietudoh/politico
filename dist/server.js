'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _partyController = require('./src/controllers/partyController');

var _partyController2 = _interopRequireDefault(_partyController);

var _officeController = require('./src/controllers/officeController');

var _officeController2 = _interopRequireDefault(_officeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', function (req, res) {
  return res.status(200).send({ message: 'Welcome to politico API' });
});

app.post('/api/v1/parties', _partyController2.default.createParty);
app.get('/api/v1/parties', _partyController2.default.getAllParty);
app.get('/api/v1/parties/:id', _partyController2.default.getOneParty);
app.patch('/api/v1/parties/:id', _partyController2.default.updateParty);
app.delete('/api/v1/parties/:id', _partyController2.default.deleteParty);

app.post('/api/v1/offices', _officeController2.default.createOffice);
app.get('/api/v1/offices', _officeController2.default.getAllOffice);
app.get('/api/v1/offices/:id', _officeController2.default.getOneOffice);

app.listen(3000);
console.log('app running on port ', 3000);
exports.default = app;