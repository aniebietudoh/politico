'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _officeController = require('../controllers/officeController');

var _officeController2 = _interopRequireDefault(_officeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.post('/api/v1/offices', _officeController2.default.createOffice);
  app.get('/api/v1/offices', _officeController2.default.getAllOffice);
  app.get('/api/v1/offices/:id', _officeController2.default.getOneOffice);
};