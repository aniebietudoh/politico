'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configure chai
// Import the dependencies for testing
_chai2.default.use(_chaiHttp2.default);
_chai2.default.should();
describe('Users', function () {
  describe('GET /api/v1/users', function () {
    // Test to get all party record
    it('Should register a new user', function (done) {
      _chai2.default.request(_server2.default).get('/api/v1/users').send({
        id: (0, _v2.default)(),
        firstname: "ani",
        lastname: "robert",
        othername: "udoh",
        email: "animan@gmail.com",
        phoneNumber: "0902112122",
        passportUrl: "http://hello.com",
        isAdmin: false,
        password: "hashPassword"
      }).end(function (err, res) {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
    });
  });
});