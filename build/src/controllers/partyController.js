'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _partyModel = require('../models/partyModel');

var _partyModel2 = _interopRequireDefault(_partyModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Party = {
  createParty: function createParty(req, res) {
    if (!req.body.partyName && !req.body.partyAddress) {
      return res.status(400).send({ message: 'party name and address fields are required' });
    }
    var party = _partyModel2.default.create(req.body);
    return res.status(201).send({
      "status": 201,
      "data": [party]
    });
  },
  getAllParty: function getAllParty(req, res) {
    var parties = _partyModel2.default.findAll();
    return res.status(200).send({
      "status": 200,
      "data": [parties]
    });
  },
  getOneParty: function getOneParty(req, res) {
    var party = _partyModel2.default.findOne(req.params.id);
    if (!party) {
      return res.status(404).send({ message: 'Party not found' });
    }
    return res.status(200).send({
      "status": 200,
      "data": [party]
    });
  },
  updateParty: function updateParty(req, res) {
    var party = _partyModel2.default.findOne(req.params.id);
    if (!party) {
      return res.status(404).send({ message: 'Party not found' });
    }
    var updatedParty = _partyModel2.default.update(req.params.id, req.body);
    return res.status(201).send({
      "status": 201,
      "data": [updatedParty]
    });
  },
  deleteParty: function deleteParty(req, res) {
    var party = _partyModel2.default.findOne(req.params.id);
    if (!party) {
      return res.status(404).send({ message: 'Party not found' });
    }
    var partyD = _partyModel2.default.delete(req.params.id);
    return res.status(204).send({
      "status": 204,
      "data": [partyD]
    });
  }
};

exports.default = Party;