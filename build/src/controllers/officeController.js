'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _officeModel = require('../models/officeModel');

var _officeModel2 = _interopRequireDefault(_officeModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Office = {
  createOffice: function createOffice(req, res) {
    if (!req.body.officeName && !req.body.officeType && !req.body) {
      return res.status(400).send({ error: 'Office name and type fields are required' });
    }
    var office = _officeModel2.default.create(req.body);
    return res.status(201).send({
      "status": 201,
      "data": [office]
    });
  },
  getAllOffice: function getAllOffice(req, res) {
    var offices = _officeModel2.default.findAll();
    return res.status(200).send({
      "status": 200,
      "data": [offices]
    });
  },
  getOneOffice: function getOneOffice(req, res) {
    var office = _officeModel2.default.findOne(req.params.id);
    if (!office) {
      return res.status(404).send({ message: 'Office not found' });
    }
    return res.status(200).send({
      "status": 200,
      "data": [office]
    });
  }
};

exports.default = Office;