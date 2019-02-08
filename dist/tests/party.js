'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configure chai
_chai2.default.use(_chaiHttp2.default);
_chai2.default.should();
describe('Party', function () {
  describe('GET /api/v1/parties', function () {
    // Test to get all party record
    it('should get all party record', function (done) {
      _chai2.default.request(_server2.default).get('/api/v1/parties').send({
        partyName: 'PDP',
        partyAddress: 'Lagos',
        partyLogo: 'http://logo.com'
      }).end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
    // Test to POST new party record
    it('should post new party record', function (done) {
      _chai2.default.request(_server2.default).post('/api/v1/parties').send({
        partyName: 'PDP',
        partyAddress: 'Lagos',
        partyLogo: 'http://logo.com'
      }).end(function (err, res) {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
    });
  });
});