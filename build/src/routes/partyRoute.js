'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _partyController = require('../controllers/partyController');

var _partyController2 = _interopRequireDefault(_partyController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.post('/api/v1/parties', _partyController2.default.createParty);
  app.get('/api/v1/parties', _partyController2.default.getAllParty);
  app.get('/api/v1/parties/:id', _partyController2.default.getOneParty);
  app.patch('/api/v1/parties/:id', _partyController2.default.updateParty);
  app.delete('/api/v1/parties/:id', _partyController2.default.deleteParty);
};